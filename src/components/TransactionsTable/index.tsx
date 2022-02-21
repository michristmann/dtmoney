import { Container } from "./styles"

export function TransactionsTable() {
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
            <td className='withdraw'>R$ 1900,00</td>
            <td>Habitação</td>
            <td>06/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
