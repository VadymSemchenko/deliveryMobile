import { REGISTER_SCREENS } from '../../constants/actionTypes';
import { ENGLISH } from '../../constants/languages';

export const initialState = {
    loading: false,
    lang: ENGLISH,
    screens: {}
};

const appConfigReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case REGISTER_SCREENS:
            return {
                ...state,
                screens: payload
            };
        default:
            return state;
    }
};

export default appConfigReducer;