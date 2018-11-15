import { take, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import { ATTEMPT_SIGN_OUT } from '../../../constants/actionTypes';
import { auth } from '../../../firebase';
import { signOutWithGoogle } from '../../../authorisation/google.js';

function* signOutSaga() {
    console.log('ATTEMPT_SIGN_OUT', ATTEMPT_SIGN_OUT, 'AUTH', auth);
    yield takeEvery(ATTEMPT_SIGN_OUT, signOut);
};

function* signOut() {
    console.log('SIGN_OUT_IN_THE_FUNCTION', auth);
    yield call(signOutWithGoogle);
};

// function signOutUsual() {
//     auth.signOut();
//     return 'test';
// };

export default signOutSaga;

