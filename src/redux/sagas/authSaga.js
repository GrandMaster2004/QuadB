import { takeEvery, put } from "redux-saga/effects";
import { LOGIN } from "../actions/authActions";

function* loginSaga(action) {
  try {
    yield new Promise((resolve) => setTimeout(resolve, 1000));

    yield put({ type: "LOGIN_SUCCESS", payload: action.payload });
  } catch (error) {
    yield put({ type: "LOGIN_FAILURE", error });
  }
}

export function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
}
