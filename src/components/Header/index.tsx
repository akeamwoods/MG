import React from "react";
import { useTypedSelector } from "../../store";
import { Container } from "./style";

export const Header: React.FC<{ minutes: number; seconds: number }> = ({
  minutes,
  seconds,
}) => {
  const difficulty = useTypedSelector((state) => state.difficulty);
  const username = useTypedSelector((state) => state.username);

  return (
    <Container>
      <div>
        <img src={process.env.PUBLIC_URL + "/icons/4.svg"} alt="fruit icon" />
        <h2>Memory Game</h2>
      </div>
      <h3>{`${minutes}:${seconds}`}</h3>
      <span>
        <p>{`Playing as: ${username}`}</p>
        <p>{`Mode: ${difficulty}`}</p>
      </span>
    </Container>
  );
};
