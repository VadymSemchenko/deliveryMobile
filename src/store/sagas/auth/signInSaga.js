import { take, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import { ATTEMPT_SIGN_IN } from '../../../constants/actionTypes';
import { GOOGLE } from '../../../constants/authProviders';
import { signInWithGoogle } from '../../../authorisation/google'

function* signInSaga() {
    const { payload } = yield take(ATTEMPT_SIGN_IN);
    console.log('SIGN_IN_SAGA');
    // let result;
    switch(payload) {
        case GOOGLE:
            console.log('GOOGLE');
            const result = yield call(signInWithGoogle);
            console.log('RESULT', result);
            return result;
        default:
            return;
    };
};

export default signInSaga;