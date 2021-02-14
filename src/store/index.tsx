import { Actions, actions } from "./actions";
import { Reducer, createStore, applyMiddleware } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import produce from "immer";
import { getType } from "typesafe-actions";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { Card, DifficultyType, Score } from "./types";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { generateEasyModeCards } from "../helpers/CardHelpers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cards", "flippedCards", "comparisonCard", "difficulty"],
};

const initialState = () => ({
  cards: [] as Card[],
  flippedCards: [] as string[],
  comparisonCard: undefined as undefined | Card,
  difficulty: "Easy" as DifficultyType,
  username: undefined as undefined | string,
  leaderboards: [] as Score[],
});

export type State = Readonly<ReturnType<typeof initialState>>;

export const rootReducer: Reducer<State, Actions> = (
  state = initialState(),
  action: Actions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(actions.cardFlipped): {
        const card = draft.cards.find((card) => card.id === action.payload);
        if (card) {
          if (!draft.comparisonCard) {
            draft.comparisonCard = card;
          } else {
            if (card.value === draft.comparisonCard.value) {
              draft.flippedCards = [
                ...draft.flippedCards,
                card.id,
                draft.comparisonCard.id,
              ];
            } else {
              card.flipped = false;
              const otherCard = draft.cards.find(
                (card) => card.id === draft.comparisonCard?.id
              );
              if (otherCard) otherCard.flipped = false;
            }
            draft.comparisonCard = undefined;
          }
        }
        break;
      }
      case getType(actions.flipCard): {
        const card = draft.cards.find((card) => card.id === action.payload);
        if (card) {
          card.flipped = !card.flipped;
        }
        break;
      }
      case getType(actions.difficultyChanged): {
        draft.difficulty = action.payload;
        break;
      }
      case getType(actions.usernameSet): {
        draft.username = action.payload;
        break;
      }
      case getType(actions.gameFinished): {
        draft.leaderboards = [...draft.leaderboards, action.payload];
        break;
      }
      case getType(actions.loadCards): {
        draft.comparisonCard = undefined;
        draft.flippedCards = [];
        draft.difficulty = action.payload;
        const mode = action.payload;
        console.log(mode);
        switch (mode) {
          case "Easy":
            draft.cards = generateEasyModeCards(4);
            break;

          case "Medium":
            draft.cards = generateEasyModeCards(6);
            break;

          case "Hard":
            draft.cards = generateEasyModeCards(9);
            break;
        }

        break;
      }
    }
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
//@ts-ignore
export const persistor = persistStore(store); // bad practice with the ignore above, but typescript error was taking up too much time.

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
