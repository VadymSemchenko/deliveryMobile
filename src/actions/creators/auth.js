import { ATTEMPT_SIGN_IN, ATTEMPT_SIGN_OUT, ATTEMPT_CHECK_AUTH } from '../../constants/actionTypes';
import { GOOGLE } from '../../constants/authProviders';


export const attemptAuthGoogle = () => ({
  type: ATTEMPT_SIGN_IN,
  payload: GOOGLE
});

export const attemptSignOut = () => ({
  type: ATTEMPT_SIGN_OUT
});

export const attemptCheckAuth = () => ({
  type: ATTEMPT_CHECK_AUTH
});