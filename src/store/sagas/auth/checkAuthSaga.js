import { take, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import { ATTEMPT_CHECK_AUTH } from '../../../constants/actionTypes';
import { checkGoogleAuth } from '../../../authorisation/google'

function* checkAuthSaga() {
    yield takeEvery(ATTEMPT_CHECK_AUTH, checkAuth);
};

function* checkAuth() {
    const signedIn = yield call(checkGoogleAuth, null);
    yield call(() => console.log('SIGNED_IN', signedIn));
};


export default checkAuthSaga;