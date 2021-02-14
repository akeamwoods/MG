import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./style";

export const Popover: React.FC<{
  time: number;
  onPlayAgainClick: () => void;
  onHighscoresClick: () => void;
}> = ({ time, onPlayAgainClick, onHighscoresClick }) => {
  return ReactDOM.createPortal(
    <Container>
      <h1>Game Over</h1>
      <h3>You scored: {time}</h3>
      <span>
        <button onClick={onHighscoresClick}>View High Scores</button>
        <button onClick={onPlayAgainClick}>Play Again</button>
      </span>
    </Container>,
    document.body
  );
};
