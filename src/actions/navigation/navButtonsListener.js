import { Navigation } from 'react-native-navigation';

import { CLOSE_MODAL } from '../../constants/topBarButtonsId';
import { sendError, clearError } from '../creators/error';

export default ({
    event: {
        buttonId,
        componentId
        },
        store
    }) => {
    switch(buttonId) {
        case CLOSE_MODAL:
            Navigation.dismissModal(componentId);
            store.dispatch(clearError())
            break;
        default:
            store.dispatch(sendError('You have not added handler for this button yet'));
            break;
    };
}