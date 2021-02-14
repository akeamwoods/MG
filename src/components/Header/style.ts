import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  background: #fff;
  color: #0000;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  z-index: 1;
  justify-content: space-between;
  align-items:center;
  color: #fff;
  img {
    height: 50px;
    margin-right:10px;
  }

  span,
  div {
    display: flex;
    align-items: center;
    p:first-child {
      margin-right: 10px;
    }
  }
  h3,h2, p {
    margin: 0;
    color:#000;
  }

  @media (max-width: 550px) {
    //   hide logo/icon when on small screen
    div {
      display: none;
      background: green;
    }
  }
`;
