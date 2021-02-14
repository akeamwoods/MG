import styled from "styled-components";

export const Container = styled.div`
position: fixed;
z-index:10;
width:100%;
height:100%;
background: rgba(0,0,0,0.8);
color:#fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

button{
    background: #af2739;
    border: none;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.02857em;
    flex: 1;
    cursor: pointer;
    padding:8px 16px;
}

button:first-child {
    margin-right: 5px;
    background: #66929e;
  }
  button:last-child {
    margin-left: 5px;
  }
  h1{
      margin:0;
  }
`;