import { ethers } from "ethers";
import { MULTICALL_ADDRESS, provider, WFUSE_ADDRESS } from "../constants";
import MULTICALL_ABI from "../constants/abis/multicall.json";
import ERC20_ABI from "../constants/abis/erc20.json";
import REWARDER_ABI from "../constants/abis/reward.json";
import { client, GET_REWARDER } from "./graphql";
import { formatEther } from "ethers/lib/utils";

async function multicall(callsData) {
  const multicallContract = new ethers.Contract(
    MULTICALL_ADDRESS,
    MULTICALL_ABI,
    provider
  );

  const calls = callsData.map(([address, abi, method, data]) => {
    const abiInterface = new ethers.utils.Interface(abi);
    const fragment = abiInterface.getFunction(method);
    const callData =
      fragment && abiInterface.encodeFunctionData(fragment, data);
    return [address, callData];
  });

  const [, results] = await multicallContract.aggregate(calls);

  return callsData.map((callData, idx) => {
    const result = results[idx];
    const [, abi, method] = callData;

    if (result !== "0x") {
      const abiInterface = new ethers.utils.Interface(abi);
      const fragment = abiInterface.getFunction(method);
      return abiInterface.decodeFunctionResult(fragment, result);
    }

    return undefined;
  });
}

export const fetchRewarder = async (rewarder) => {
  const response = await client.query({
    query: GET_REWARDER,
    variables: {
      id: rewarder.toLowerCase(),
    },
  });

  const users = response?.data?.rewarder?.users
    ?.map((user) => user.id)
    ?.filter(
      (userAddress) =>
        userAddress !== "0x0000000000000000000000000000000000000000"
    );

  const result = await multicall(
    (users ? users : []).map((user) => [
      rewarder,
      REWARDER_ABI,
      "pendingTokens",
      [user],
    ])
  );

  const accountDebt = (users ? users : [])
    .map((user, idx) => ({
      user,
      amount: +ethers.utils.formatEther(result[idx].pending),
    }))
    .filter((user) => user.amount > 0);

  const totalDebt = parseInt(accountDebt.reduce((prev, curr) => prev + curr.amount, 0));

  const tokenContract = new ethers.Contract(WFUSE_ADDRESS, ERC20_ABI, provider);
  const rewardContract = new ethers.Contract(rewarder, REWARDER_ABI, provider)

  const balance = parseInt(formatEther(await tokenContract.balanceOf(rewarder)));
  const tokenPerSec = (formatEther(await rewardContract.tokenPerSec()))

  return {
    totalDebt,
    tokenPerSec,
    rewardBalance: balance,
    diff: balance - totalDebt
  };
};
