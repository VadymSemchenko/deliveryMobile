import { take, put, call, apply, takeLatest, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { auth, firebase } from '../../../firebase';
import { ATTEMP_SIGN_OUT } from '../../../constants/actionTypes';

console.log('AUTH', auth);

function* startAuthListener() {
        console.log('START!');
        const channel = eventChannel(emit => {
                        auth.onAuthStateChanged(user => {
                            console.log('USER AT EMITTER', user);
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

    console.log('CHANNEL', channel);

    while (true) {
        const { data } = yield take(channel);
        yield call(() => console.log('WHILE_TRUE', data));
    };
}

function* authChannelWatcherSaga() {
    yield fork(startAuthListener)
};


export default authChannelWatcherSaga;

// function createAuthEventChannel() {
//     const listener = eventChannel(
//         emit => {
//             auth.onAuthStateChanged((user) => {
//                 console.log('USER AT EMITTER', user);
//                 if(user) {
//                     emit(user);
//                 } else {
//                     emit(actionTypes.SIGN_OUT);
//                 }
//             });
//             return auth.signOut;
//         }
//     );
//     return listener;
// };

// function* authChannelWatcherSaga() {
//     console.log('AUTH', auth);
//     const recieveAuth = createAuthEventChannel();
//     while(true) {
//         console.log('AUTHCHANNEL');
//         const value = yield take(recieveAuth);
//         if (value === actionTypes.SIGN_OUT) {
//             yield put({
//                 type: actionTypes.SIGN_OUT
//             });
//             yield put({
//                 type: actionTypes.FINISH_LOADING
//             });
//         } else {
//             const { uid: userID, displayName: userName } = value;
//             yield put({
//                 type: actionTypes.SIGN_IN,
//                 payload: {
//                     userID,
//                     userName
//                 }
//             });
//             yield put({
//                 type: actionTypes.FINISH_LOADING
//             });
//         }
//     }
// };