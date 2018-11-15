import { take, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import authSaga from './auth/rootAuthSaga';
// import { ATTEMPT_SIGN_IN, ATTEMPT_SIGN_OUT } from '../../constants/actionTypes';


// function* watcherSaga() {
//     yield takeLatest(ATTEMPT_SIGN_OUT, () => { console.log('ATTEMPT_SIGN_OUT AT ROOT SAGA') });
//     const { payload } = yield take(ATTEMPT_SIGN_IN);
//     yield fork(authSaga, payload);
// };

// export default watcherSaga;

function* rootSaga() {
    yield fork(authSaga);
};

export default rootSaga;