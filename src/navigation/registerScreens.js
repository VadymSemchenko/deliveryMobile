import { Navigation } from 'react-native-navigation';

import * as Screens from '../screens';
import { REGISTER_SCREENS } from '../constants/actionTypes';
import PROJECT_NAME from '../constants/projectName';
import startApp from './startApp';
import { persistedScreen } from '../decorators';

export default ({ store, persistor }) => {
    const SCREENS_NAMES = Object.values(Screens).reduce((accumulator, item) => {
            const { component, name } = item;
            const decoratedComponent = () => persistedScreen({ component, store, persistor });
            const fullComponentName = `${PROJECT_NAME}.${name}`;
            accumulator[name] = fullComponentName;
            Navigation.registerComponent(
                fullComponentName,
                decoratedComponent,
                );
            return accumulator;
        }, {});
    store.dispatch({
        type: REGISTER_SCREENS,
        payload: SCREENS_NAMES
    });
    startApp(SCREENS_NAMES.HOME);
};