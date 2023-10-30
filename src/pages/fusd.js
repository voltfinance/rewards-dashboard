import dayjs from "dayjs";
import useDayDatas from "../hooks/useDayDatas";
import useFusd from "../hooks/useFusd";
import usePegMigration from "../hooks/usePegMigration";
import { formatEther, formatUnits } from "ethers/lib/utils";
import useBassets from "../hooks/useBassets";

export function Fusd() {
  const dayDatas = useDayDatas();
  const fusd = useFusd();
  const pegMigration = usePegMigration();
  const bassets = useBassets();

  return (
    <>
      <div className="w-1/2 mx-auto">
        <h2 className="text-2xl mb-1">Main Stats</h2>
        <div className="flex mb-4">
          <div class="block max-w-sm mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Total Liquidity
            </h5>
            <p class="font-normal text-gray-700">
              {fusd && formatEther(fusd.totalSupply.exact)} FUSD
            </p>
          </div>
          <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Total Migrated
            </h5>
            <p class="font-normal text-gray-700">
              {pegMigration && formatEther(pegMigration.migratedAmount)} FUSD
            </p>
          </div>
        </div>

        <h2 className="text-2xl mb-1">Collateral</h2>
        <div className="flex mb-4">
          {bassets &&
            bassets.map((basset) => (
              <div class="block max-w-sm mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {basset.token.symbol}
                </h5>
                <p class="font-normal text-gray-700">
                  {formatUnits(basset.vaultBalance.exact, basset.token.decimals)}
                </p>
              </div>
            ))}
        </div>

        <h2 className="text-2xl">Fusd Daily Stats</h2>
        <table className="mt-6 overflow-x-auto shadow-md sm:rounded-lg text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Total Supply
              </th>
              <th scope="col" className="py-3 px-6">
                Mint Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Redeem Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Swap Amount
              </th>
            </tr>
          </thead>
          {dayDatas && (
            <tbody>
              {dayDatas.map((dayData) => (
                <tr className="bg-white border-b" key={dayData.id}>
                  <td className="py-4 px-6">
                    {dayjs.unix(dayData.id * 86400).format("D/M/YYYY")}
                  </td>
                  <td className="py-4 px-6">
                    {formatEther(dayData.totalSupply)}
                  </td>
                  <td className="py-4 px-6">
                    {formatEther(dayData.dailyMintAmount)}
                  </td>
                  <td className="py-4 px-6">
                    {formatEther(dayData.dailyRedeemAmount)}
                  </td>
                  <td className="py-4 px-6">
                    {formatEther(dayData.dailySwapAmount)}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
