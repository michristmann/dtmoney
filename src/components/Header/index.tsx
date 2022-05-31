import dtMoneyLogo from "../../assets/logo.svg"

import { Container, Content } from "./styles"

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={dtMoneyLogo} alt='dt money logo' />
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
