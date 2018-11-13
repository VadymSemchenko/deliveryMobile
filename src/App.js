import { Provider } from 'react-redux';

import * as Screens from './screens';
import PROJECT_NAME from './constants/projectName';
import registerScreens from './navigation/registerScreens';
import { REGISTER_SCREENS } from './constants/actionTypes';
import configureStore from './store';
import initApp from './navigation/initApp';
import START_SCREEN_NAME from './constants/homeScreenName';

const { store, persistor } = configureStore({
  startScreenName: START_SCREEN_NAME
});

const SCREENS_NAMES = registerScreens({
  screens: Screens,
  projectName: PROJECT_NAME,
  provider: Provider,
  store,
  persistor,
  successActionType: REGISTER_SCREENS
});

initApp(SCREENS_NAMES.PRELOAD);