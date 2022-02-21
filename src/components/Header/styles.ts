import styled from "styled-components"

export const Container = styled.header`
  background: var(--purple);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    height: 3rem;
    padding: 0 2rem;

    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
