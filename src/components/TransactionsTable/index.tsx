import { useTransactions } from "../../hooks/useTransactions"
import { currencyFormatter } from "../../utils/currencyFormatter"
import { Container } from "./styles"

export function TransactionsTable() {
  const { transactions } = useTransactions()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === "withdraw" && <span>-</span>}
                  {currencyFormatter(Number(transaction.value))}
                </td>
                <td>{transaction.category} </td>
                <td>
                  {new Intl.DateTimeFormat("pt-Br").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}
