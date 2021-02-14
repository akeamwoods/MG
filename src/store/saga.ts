import { put, delay } from "@redux-saga/core/effects";
import { actions } from "./actions";

export function* cardClickedSaga({ payload }:any) {
  try {
      yield put(actions.flipCard(payload.id));
      yield delay(1000);
      yield (put(actions.cardFlipped(payload.id)));
  } catch (error) {
    console.log(error);
  }
}