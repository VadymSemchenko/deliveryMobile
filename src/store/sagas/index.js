import { take, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import authSaga from './auth';
import errorSaga from './error';

function* rootSaga() {
    yield fork(authSaga);
    yield fork(errorSaga);
};

export default rootSaga;