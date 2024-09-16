import { transactionsList } from "./mockData/transactionsList";

type FetchTransactionsListParams = {
  from?: number;
  limit?: number;
};
export const fetchTransactionsList = (
  params?: FetchTransactionsListParams
): Promise<Response> => {
  const from = params?.from || Date.now();
  const limit = params?.limit || 4;

  const page = transactionsList
    .filter((transaction) => transaction.timestamp < from)
    .splice(0, limit);

  const isLastPage =
    !!page.length &&
    page[page.length - 1].id ===
      transactionsList[transactionsList.length - 1].id;

  return new Promise((resolve) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        resolve(
          new Response(
            JSON.stringify({ errorMessage: "Internal server error" }),
            {
              status: 500,
              statusText: "Internal server error",
            }
          )
        );
      }

      resolve(
        new Response(
          JSON.stringify({
            transactions: page,
            isLastPage,
          }),
          {
            status: 200,
            statusText: "OK",
          }
        )
      );
    }, 2000);
  });
};

export type User = {
  id: string;
  username: string;
};

export const fetchUser = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "eaf61587515ddc1654ea765765ffa",
        username: "joegambler99",
      });
    }, 1000);
  });
};

export type MoneyAmount = {
  currency: string;
  amount: string;
};

export const fetchBalance = (): Promise<MoneyAmount> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        currency: "USD",
        amount: "32.88",
      });
    }, 1500);
  });
};
