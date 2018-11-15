import { take, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import authChannelWatcherSaga from './authChannelWatcherSaga';
import signInSaga from './signInSaga';
import checkAuthSaga from './checkAuthSaga';
import signOutSaga from './signOutSaga';

function* authSaga() {
    yield fork(authChannelWatcherSaga);
    yield fork(signInSaga);
    yield fork(checkAuthSaga);
    yield fork(signOutSaga);
};

export default authSaga;