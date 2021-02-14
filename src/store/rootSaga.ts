import { getType } from "typesafe-actions";
import { all, takeEvery } from "@redux-saga/core/effects";
import { actions } from "./actions";
import { cardClickedSaga } from "./saga";


export function* rootSaga() {
  yield all([takeEvery(getType(actions.cardClicked), cardClickedSaga)]);
}
