import React from "react";
import { useHistory } from "react-router-dom";
import { Highscores } from "../../components/Highscores";
import { IconBar } from "../../components/IconBar";
import { useTypedSelector } from "../../store";
import { DifficultyType } from "../../store/types";
import { Wrapper, Container } from "./style";

export const HighscoresPage = () => {
  const scores = useTypedSelector((state) => state.leaderboards);
  const options = ["Easy", "Medium", "Hard"] as DifficultyType[];
  const [selectedDifficulty, changeDifficulty] = React.useState(
    options[0] as DifficultyType
  );
  const history = useHistory();
  return (
    <Wrapper>
      <Container>
        <h1>Highscores</h1>
        <h3>Top 10 Leaderboard</h3>
        <IconBar />
        <label>Difficulty</label>
        <select
          onChange={(e) => changeDifficulty(e.target.value as DifficultyType)}
          value={selectedDifficulty}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {selectedDifficulty &&
        scores.length &&
        scores.filter((score) => score.mode === selectedDifficulty).length ? (
          <Highscores filter={selectedDifficulty} scores={scores} />
        ) : (
          <p>No highscores found</p>
        )}
        <button onClick={() => history.push("/")}>Back to start menu</button>
      </Container>
    </Wrapper>
  );
};
