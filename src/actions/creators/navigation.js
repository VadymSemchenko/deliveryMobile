import { SET_ACTIVE_COMPONENT } from '../../constants/actionTypes';

export const setActiveComponent = ({ componentName, componentId }) => ({
    type: SET_ACTIVE_COMPONENT,
    payload: {
        componentName,
        componentId
    }
});