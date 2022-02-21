import styled from "styled-components"

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;

    border-spacing: 0 0.5rem;

    th {
      text-align: left;

      padding: 1rem 2rem;
      line-height: 1.5rem;

      font-weight: 400;
      color: var(--text-body);
    }

    td {
      padding: 1rem 2rem;

      border: 0;
      border-radius: 0.25rem;

      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`