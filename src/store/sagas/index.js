import { take, fork, takeEvery } from 'redux-saga/effects';

import { TEST_ACTION } from '../../constants/actionTypes';

export default function* () {
    yield takeEvery(TEST_ACTION, () => console.log('TEST'));
};