import { combineReducers } from 'redux';
import appConfigReducer from './appConfig';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    appConfig: appConfigReducer,
    firebase: firebaseReducer
});
