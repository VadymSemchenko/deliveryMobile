import { SEND_ERROR, CLEAR_ERROR } from '../../constants/actionTypes';

export const sendError = message => ({
    type: SEND_ERROR,
    payload: message
});

export const clearError = () => ({
    type: CLEAR_ERROR
});