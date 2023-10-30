import { useEffect, useMemo, useState } from "react";
import { SECONDS_IN_MONTH, TOTAL_ALLOC, VOLT_PER_SEC } from "../constants";
import { fetchRewarder } from "../services/rewarder";

export function Rewarder({ rewarder }) {
  const { address, name, alloc } = rewarder;

  console.log(alloc);

  const [loading, setLoading] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    if (address) {
      if (address !== "0x0000000000000000000000000000000000000000") {
        fetchRewarder(address).then((data) => {
          setData(data);
          setLoading(false);
        });
      } else {
        setData({
          totalDebt: 0,
          rewardBalance: 0,
          diff: 0,
          tokenPerSec: 0,
        });
        setLoading(false);
      }
    }
  }, [address]);

  const daysLeft = useMemo(() => data?.diff / data?.tokenPerSec / 86400, [
    data?.diff,
    data?.tokenPerSec,
  ]);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {loading ? (
        <td className="py-4 px-6">Loading...</td>
      ) : (
        <>
          {[
            name,
            data?.totalDebt,
            data?.rewardBalance,
            data?.diff,
            data?.tokenPerSec,
            parseInt(data?.tokenPerSec * 2592000),
            (alloc / TOTAL_ALLOC) * VOLT_PER_SEC * SECONDS_IN_MONTH,
            ((alloc / TOTAL_ALLOC) * 100).toFixed(2) + '%',
            daysLeft,
            (30 - daysLeft) * 86400 * data?.tokenPerSec,
          ].map((value, index) =>
            (typeof value === 'number' && !isNaN(value)) || typeof value === 'string' ? (
              <td key={index} className="py-4 px-6">{value}</td>
            ) : (
              <td key={index} className="py-4 px-6">-</td>
            )
          )}
        </>
      )}
    </tr>
  );
}
