import { take, call, fork, takeEvery, takeLatest, put } from 'redux-saga/effects';

import { ATTEMPT_SIGN_OUT } from '../../../constants/actionTypes';
import { auth } from '../../../firebase';
import { signOutWithGoogle } from '../../../actions/authorisation/google';

function* signOutSaga() {
    yield takeEvery(ATTEMPT_SIGN_OUT, signOut);
};

function *signOut() {
    const errorMessage = yield call(signOutWithGoogle);
    if (!!errorMessage) {
        put
    }
};

export default signOutSaga;

