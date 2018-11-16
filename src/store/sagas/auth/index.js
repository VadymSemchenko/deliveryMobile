import { take, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import authChannelWatcherSaga from './authChannelWatcherSaga';
import signInSaga from './signInSaga';
import checkAuthSaga from './checkAuthSaga';
import signOutSaga from './signOutSaga';

export default function*() {
    yield fork(authChannelWatcherSaga);
    yield fork(signInSaga);
    yield fork(checkAuthSaga);
    yield fork(signOutSaga);
};