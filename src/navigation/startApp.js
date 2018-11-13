import { Navigation } from 'react-native-navigation';

export default name => {
    Navigation.setRoot({
        root: {
            component: {
                name
            }
        }
    });
};