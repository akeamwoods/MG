import { ActionType, createAction } from "typesafe-actions";
import { Card, DifficultyType, Score } from "./types";

const cardClicked = createAction("Card Clicked")<Card>();
const cardFlipped = createAction("Card Flipped")<string>();
const flipCard = createAction("Flip Card")<string>();
const difficultyChanged = createAction("Difficulty Changed")<DifficultyType>();
const usernameSet = createAction("Username Set")<string>();
const gameFinished = createAction("Game finished")<Score>();
const loadCards = createAction("Load Cards")<DifficultyType>();


export const actions = {
  cardClicked,
  cardFlipped,
  flipCard,
  difficultyChanged,
  usernameSet,
  gameFinished,
  loadCards
};

export type Actions = ActionType<typeof actions>;
