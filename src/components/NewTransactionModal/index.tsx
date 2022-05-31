import { FormEvent, useState } from "react"
import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles"

import { api } from "../../services/api"
import closeIcon from "../../assets/close.svg"
import incomeIcon from "../../assets/income.svg"
import outcomeIcon from "../../assets/outcome.svg"

Modal.setAppElement("#root")

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("")
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type,
    }

    api.post("/transactions", data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeIcon} alt='Close modal' />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder='Valor'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {
              setType("deposit")
            }}
            isActive={type === "deposit"}
            activeColor='green'
          >
            <img src={incomeIcon} alt='Income' />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => {
              setType("withdraw")
            }}
            isActive={type === "withdraw"}
            activeColor='red'
          >
            <img src={outcomeIcon} alt='Outcome' />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
