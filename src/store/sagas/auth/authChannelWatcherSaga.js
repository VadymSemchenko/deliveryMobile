import { take, put, call, apply, takeLatest, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { auth, firebase } from '../../../firebase';
import { ATTEMP_SIGN_OUT } from '../../../constants/actionTypes';

function* startAuthListener() {
        const channel = eventChannel(emit => {
                        auth.onAuthStateChanged(user => {
                            if(user) {
                                emit(user);
                            } else {
                                emit({
                                    type: ATTEMP_SIGN_OUT
                                });
                            }
                        });
                        return auth.signOut;
                    });
    while (true) {
        const { data } = yield take(channel);
    };
}

function* authChannelWatcherSaga() {
    yield fork(startAuthListener)
};


export default authChannelWatcherSaga;
