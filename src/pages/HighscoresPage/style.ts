import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 20px;
  background: white;
  box-shadow: rgb(0 0 0 / 20%) 1px 7px 14px -5px;
  label,
  select,
  button {
    margin: 0 0 10px 0;
  }
  button,
  select,
  input {
    padding: 8px 16px;
  }
  label {
    color: rgba(0, 0, 0, 0.54);
    margin: 20px 0 5px 0;
  }
  h1 {
    font-size: 3rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.167;
    letter-spacing: 0em;
    margin: 0;
    text-align: center;
  }
  h3 {
    font-weight: lighter;
    text-align:center;
  }

  button {
    background: #af2739;
    border: none;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.02857em;
    flex: 1;
    cursor: pointer;
  }

  p{
    font-style:italic;
    text-align:center;
  }

`;
