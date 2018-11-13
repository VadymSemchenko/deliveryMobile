import { combineReducers } from 'redux';
import appConfigReducer from './appConfig';

export default combineReducers({
    appConfig: appConfigReducer
});
