import configureApp from './store';
import registerScreens from './actions/navigation/registerScreens';

console.disableYellowBox = true;

const initApp = async() => {
  const store = await configureApp().then(({ store, persistor }) => {
    registerScreens({
      store,
      persistor
    });
    return store;
  });
  console.log('STORE AT INIT', store);
  return store;
};

const store = initApp();

export default store;
