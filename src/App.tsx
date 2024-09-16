import { useEffect, useState } from "react";
import {
  fetchBalance,
  fetchTransactionsList,
  fetchUser,
  MoneyAmount,
  User,
} from "./api/api";

export default function App() {
  const [transactionsList, setTransactionsList] = useState<never[]>([]);
  const [user, setUser] = useState<User>();
  const [balance, setBalance] = useState<MoneyAmount>();

  useEffect(() => {
    fetchTransactionsList({ limit: 99999 })
      .then((resp) => resp.json())
      .then((data) => {
        setTransactionsList(data.transactions);
      });

    fetchUser().then((data) => {
      setUser(data);
    });

    fetchBalance().then((data) => {
      setBalance(data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold p-8">My transactions</h1>

      <div className="p-4 flex flex-col items-start justify-evenly bg-gray-200 rounded-2xl mx-4">
        <div className="text-xl">
          Balance: {balance?.currency} {balance?.amount}
        </div>
        <div className="text-xl">Username: {user?.username}</div>

        <div className="w-full mt-8">
          {transactionsList.map((transaction) => {
            return (
              <div className="bg-gray-300 mb-4 rounded-xl">
                <pre>{JSON.stringify(transaction, null, 2)}</pre>
                <pre>
                  {new Date(transaction.timestamp).toLocaleDateString("de")}
                </pre>
                <pre>
                  {new Date(transaction.timestamp)
                    .toLocaleTimeString("de")
                    .substring(0, 5)}
                </pre>
              </div>
            );
          })}
          <div>
            <button className="bg-blue-200 p-2 rounded-xl text-gray-800">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
