import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../services/axios";

export type Transaction = {
  id: string;
  title: string;
  type: "withdraw" | "deposit";
  value: number;
  category: string;
  createdAt: string;
};

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

type TransactionContextProps = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

type TransactionProviderProps = {
  children: ReactNode;
};

export const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransaction = useCallback(
    async (transactionInput: TransactionInput) => {
      const respose = await api.post("/transactions", transactionInput);
      const { transaction } = respose.data;

      setTransactions((prev) => [...prev, transaction]);
    },
    []
  );

  useEffect(() => {
    api
      .get("/transactions")
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
