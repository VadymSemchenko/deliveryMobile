import { Navigation } from 'react-native-navigation';

import SCREENS_NAMES from '../../constants/screensNames';
import { CLOSE_MODAL } from '../../constants/topBarButtonsId';

export default message => {
    Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: SCREENS_NAMES.ERROR_MODAL,
              passProps: { message },
              options: {
                topBar: {
                  title: {
                    text: 'ERROR MODAL'
                  },
                  rightButtons: [
                    {
                      id: CLOSE_MODAL,
                      text: 'close modal'
                    }
                  ]
                }
              }
            }
          }]
        }
    });
};
