import { Navigation } from 'react-native-navigation';

import persistedScreen from '../decorators/persistedScreen';

export default ({ screens, projectName, store, persistor, provider, successActionType }) => {
    const screensNames = Object.values(screens).reduce((accumulator, item) => {
            const { component, name, needsStore } = item;
            const returnComponent = needsStore ? () => persistedScreen({ component, provider, store, persistor }): () => component;
            const fullComponentName = `${projectName}.${name}`;
            accumulator[name] = fullComponentName;
            Navigation.registerComponent(
                fullComponentName,
                returnComponent,
                );
            return accumulator;
        }, {});
    store.dispatch({
        type: successActionType,
        payload: screensNames
    });
    return screensNames;
};