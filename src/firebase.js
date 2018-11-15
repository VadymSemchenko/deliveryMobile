import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

GoogleSignin.configure();

export const database = firebase.database();
export const timestamp = firebase.database.ServerValue.TIMESTAMP;
export const auth = firebase.auth();