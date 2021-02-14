import React from "react";
import { Container } from "./style";

export const IconBar = () => {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + "/icons/1.svg"} alt="fruit icon" />
      <img src={process.env.PUBLIC_URL + "/icons/2.svg"} alt="fruit icon" />
      <img src={process.env.PUBLIC_URL + "/icons/3.svg"} alt="fruit icon" />
      <img src={process.env.PUBLIC_URL + "/icons/4.svg"} alt="fruit icon" />
      <img src={process.env.PUBLIC_URL + "/icons/5.svg"} alt="fruit icon" />
      <img src={process.env.PUBLIC_URL + "/icons/6.svg"} alt="fruit icon" />
      <img src={process.env.PUBLIC_URL + "/icons/7.svg"} alt="fruit icon" />
      <img src={process.env.PUBLIC_URL + "/icons/8.svg"} alt="fruit icon" />
    </Container>
  );
};
