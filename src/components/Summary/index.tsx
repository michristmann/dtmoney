import { Container } from "./styles"
import incomeIcon from "../../assets/income.svg"
import outcomeIcon from "../../assets/outcome.svg"
import totalIcon from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions"
import { currencyFormatter } from "../../utils/currencyFormatter"

export function Summary() {
  const { transactions } = useTransactions()

  const financialBalance = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += Number(transaction.value)
        acc.total += Number(transaction.value)
      } else {
        acc.withdraws += Number(transaction.value)
        acc.total -= Number(transaction.value)
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt='Entradas' />
        </header>
        <strong>{currencyFormatter(financialBalance.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIcon} alt='Saídas' />
        </header>
        <strong>-{currencyFormatter(financialBalance.withdraws)}</strong>
      </div>
      <div className={financialBalance.total < 0 ? "negative" : "positive"}>
        <header>
          <p>Total</p>
          <img src={totalIcon} alt='Total' />
        </header>
        <strong>{currencyFormatter(financialBalance.total)}</strong>
      </div>
    </Container>
  )
}
