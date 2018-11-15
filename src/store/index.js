import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'react-native-firebase';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['appConfig']
};

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default async () => {
    const store = createStore(persistedReducer, composeEnhancers(
        applyMiddleware(sagaMiddleware),
        reactReduxFirebase(firebase)
        ));
    sagaMiddleware.run(rootSaga);
    const persistor = await persistStore(store);
  return { store, persistor };
};