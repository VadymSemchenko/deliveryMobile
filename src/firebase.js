import firebase from 'react-native-firebase';
export const database = firebase.database();
export const timestamp = firebase.database.ServerValue.TIMESTAMP;
export const auth = firebase.auth();