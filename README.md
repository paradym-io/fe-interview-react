# Paradym transactions list

## Getting started

```bash
# clone the repo in your local environment, then...

npm install
npm start

```

## Tasks:

This page represents a transaction history list. The implementation is incomplete,
and we need to implement the following:

- Define a type for the Transactions list response
- Create components to represent the 4 types of transaction: Casino game, Deposit, Withdrawal, Sports bet
- Implement the "Load More" button to load 4 transactions at the time
- Handle API loading feedback and errors

## Mock API:

### fetchTransactionsList({ from: number, limit: number })

- from: return only the transactions with timestamp > from
- limit: how many transactions to return (page size)

Returns: [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) (as returned by the standard [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch))

**Warning: the mock API might occasionally return an error!**

The Transactions list returns 4 types of transactions: `CASINO_GAME`, `SPORTS_BET`, `DEPOSIT`, `WITHDRAWAL`.

Each type of transaction always returns the same set of properties (e.g. CASINO_GAME will always have `details.gameName` and `details.gameId`)
