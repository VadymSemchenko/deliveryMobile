import { take, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';

import { SEND_ERROR } from '../../../constants/actionTypes';
import showErrorModal from '../../../actions/navigation/showErrorModal';

export default function*() {
    const { payload: errorMessage } = yield take(SEND_ERROR);
    console.log('ERROR_MESSAGE', errorMessage);
    yield call(showErrorModal,errorMessage);
};