import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { api } from "../services/api"

interface Transaction {
  id: number
  title: string
  value: string
  category: string
  type: string
  createdAt: string
}

type TransactionInputProps = Omit<Transaction, "id" | "createdAt">

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextDataProps {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInputProps) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextDataProps>(
  {} as TransactionsContextDataProps
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
