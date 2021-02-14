import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 20px;
  background: white;
  box-shadow: rgb(0 0 0 / 20%) 1px 7px 14px -5px;
  label,
  input,
  button,
  select {
    margin: 0 0 10px 0;
  }
  button,
  input,
  select {
    padding: 8px 16px;
  }

  label {
    color: rgba(0, 0, 0, 0.54);
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
  }
  span {
    display: flex;
    button {
      background: #af2739;
      border: none;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.02857em;
      flex: 1;
      cursor: pointer;
    }
    button:first-child {
      margin-right: 5px;
      background: #66929e;
    }
    button:last-child {
      margin-left: 5px;
    }
  }
`;

export const ErrorText = styled.p`
  margin: 0 0 5px 0;
  color: red;
`;
