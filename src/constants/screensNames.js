import PROJECT_NAME from './projectName';
import * as Screens from '../screens';

const SCREENS_NAMES = Object.values(Screens).reduce((accumulator, item) => {
    const { name } = item;
    const fullComponentName = `${PROJECT_NAME}.${name}`;
    accumulator[name] = fullComponentName;
    return accumulator;
}, {});

export default SCREENS_NAMES;