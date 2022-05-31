import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f3f5;
    --shape: #ffffff;

    --red: #e52e4d;
    --purple: #5429cc;
    --green: #33cc95;
    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600; 
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    display: flex;
    position: fixed;

    align-items: center;
    justify-content: center;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.5);
  } 

  .react-modal-content {
    position: relative;

    width: 100%;
    max-width: 576px;
    padding: 3rem;

    border-radius: 0.25rem;

    background: var(--background);
  }

  .react-modal-close {
    position: absolute;

    right: 1.5rem;
    top: 1.5rem;

    border: 0;

    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.6)
    }
  }
`
