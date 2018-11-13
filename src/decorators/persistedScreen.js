import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

export default ({ component: Component, provider: Provider, store, persistor }, stackProps) => componentProps => (
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
