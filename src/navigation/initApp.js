import { Navigation } from 'react-native-navigation';

console.disableYellowBox = true;

export default name => {
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
          root: {
              component: { name }
          }
    });
  });
};