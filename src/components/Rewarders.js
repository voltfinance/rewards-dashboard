import { REWARDERS } from "../constants";
import { Rewarder } from "./Rewarder";

export function Rewarders() {
  return (
    <div className="w-full">
      <table className="mt-6 w-1/2 overflow-x-auto mx-auto shadow-md sm:rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">Farm</th>
            <th scope="col" className="py-3 px-6">Total Debt</th>
            <th scope="col" className="py-3 px-6">Reward Balance</th>
            <th scope="col" className="py-3 px-6">Pool Balance</th>
            <th scope="col" className="py-3 px-6">Token Per Sec</th>
            <th scope="col" className="py-3 px-6">Fuse Distributed</th>
            <th scope="col" className="py-3 px-6">Volt Distributed</th>
            <th scope="col" className="py-3 px-6">Volt Distributed %</th>
            <th scope="col" className="py-3 px-6">Days Left</th>
            <th scope="col" className="py-3 px-6">Topup Amount</th>
          </tr>
        </thead>
        <tbody>
          {REWARDERS.map((rewarder, index) => (
            <Rewarder key={rewarder.pid} rewarder={rewarder} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
