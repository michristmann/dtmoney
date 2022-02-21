import { useEffect } from "react"
import { api } from "../../services/api"

import { Container } from "./styles"

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data))
  }, [])

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
          <tr>
            <td>Desenvolvimento web</td>
            <td className='deposit'>R$ 7800,00</td>
            <td>Trabalho</td>
            <td>21/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$ 1900,00</td>
            <td>Habitação</td>
            <td>06/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
