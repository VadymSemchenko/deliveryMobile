import { GoogleSignin, statusCodes } from 'react-native-google-signin';

// GoogleSignin.configure();

export const signInWithGoogle = async () => {
    try {
        await GoogleSignin.configure();
        const data = await GoogleSignin.signIn().then(() => { console.log('THEN') });
        console.log('DATA', data);
    } catch (error) {
        console.log('ERROR', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        return code;
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        return code;
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        return code;
      } else {
        // some other error happened
        return code;
      }
    }
  };

  export const checkGoogleAuth = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    return isSignedIn;
};

export const signOutWithGoogle = async () => {
  let errorMessage = '';
    try {
      await GoogleSignin.revokeAccess();
    } catch(error) {
      errorMessage += error;
    };
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      errorMessage += error;
  }
  return errorMessage;
};