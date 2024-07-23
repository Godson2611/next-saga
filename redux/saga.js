import { CARD_LIST, ADD_CARDS, CARD_LIST_ID, CARD, SET_ID } from "./action";
import { takeEvery, put } from "redux-saga/effects";

function* getCards() {
  let data = yield fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  data = yield data.json();
  yield put({ type: ADD_CARDS, data });
}

function* getCardById() {
  let id = yield put(SET_ID);
  let data = yield fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`);
  data = yield data.json();
  yield put({ type: CARD, data });
}

function* blogSaga() {
  yield takeEvery(CARD_LIST, getCards);
  yield takeEvery(CARD_LIST_ID, getCardById);
}

export default blogSaga;
