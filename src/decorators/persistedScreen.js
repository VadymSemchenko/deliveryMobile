import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

export default ({ component: Component, store, persistor }, stackProps) => componentProps => (
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
            >
            <Component {...{
                ...stackProps,
                ...componentProps,
            }} />
            </PersistGate>
         </Provider>
    );