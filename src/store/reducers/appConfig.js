import { REGISTER_SCREENS, SEND_ERROR } from '../../constants/actionTypes';
import { ENGLISH } from '../../constants/languages';

const initialState = {
    loading: false,
    lang: ENGLISH,
    screens: {},
    err: ''
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case REGISTER_SCREENS:
            return {
                ...state,
                screens: payload
            };
        case SEND_ERROR:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
};
