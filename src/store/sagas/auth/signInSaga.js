import { take, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import { ATTEMPT_SIGN_IN } from '../../../constants/actionTypes';
import { GOOGLE } from '../../../constants/authProviders';
import { signInWithGoogle } from '../../../actions/authorisation/google'

function* signInSaga() {
    const { payload } = yield take(ATTEMPT_SIGN_IN);
    switch(payload) {
        case GOOGLE:
            const result = yield call(signInWithGoogle);
            return result;
        default:
            return;
    };
};

export default signInSaga;