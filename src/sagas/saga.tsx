import { put, call, takeLatest } from "redux-saga/effects";
import { userProfileFetch } from "../api/userProfileFetch";
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getUserAsync(action: any) {
  const userProfileResponse: ResponseGenerator = yield call(userProfileFetch);
  yield put({ type: "GET_USER_ASYNC", payload: { user: userProfileResponse } });
}

export function* watchGetUser() {
  yield takeLatest("GET_USER", getUserAsync);
}
