import React, { useEffect } from "react";
import { Container, ErrorText, Form } from "./style";
import { DifficultyType } from "./../../store/types";
import { actions } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../../store";
import { IconBar } from "../../components/IconBar";

export const MenuPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const mode = useTypedSelector((state) => state.difficulty);
  const name = useTypedSelector((state) => state.username);
  const cards = useTypedSelector((state) => state.cards);
  const options = ["Easy", "Medium", "Hard"] as DifficultyType[];
  const [username, setUsername] = React.useState(name ? name : "");
  const [errorText, setErrorText] = React.useState("");
  const [selectedDifficulty, changeDifficulty] = React.useState(
    mode as DifficultyType
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeDifficulty(e.target.value as DifficultyType);
    dispatch(actions.difficultyChanged(e.target.value as DifficultyType));
  };

  const handleSubmit = () => {
    if (username) {
      dispatch(actions.usernameSet(username));
      dispatch(actions.loadCards(selectedDifficulty));
      history.push("/Play");
    } else {
      setErrorText("Please select a username");
    }
  };

  useEffect(() => {
    if (username && errorText) {
      setErrorText("");
    }
  }, [username, errorText]);

  useEffect(() => {
    if (cards) {
      dispatch(actions.loadCards(selectedDifficulty));
    }
    // eslint-disable-next-line
  }, [selectedDifficulty]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Memory Game</h1>
        <IconBar />
        <h3>Match the cards as fast as possible - quickest time wins</h3>
        <label>Username</label>
        {errorText && <ErrorText>{errorText}</ErrorText>}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Difficulty</label>
        <select onChange={handleChange} value={selectedDifficulty}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span>
          <button type="button" onClick={() => history.push("/Scores")}>
            View highscores
          </button>
          <button type="submit">Start game</button>
        </span>
      </Form>
    </Container>
  );
};
