import configureApp from './store';
import registerScreens from './navigation/registerScreens';

console.disableYellowBox = true;

configureApp().then(({ store, persistor }) => {
  registerScreens({
    store,
    persistor
  });
});