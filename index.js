/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import firebase from '@react-native-firebase/app';

// Initialize Firebase with your project's configuration settings
const firebaseConfig = {
  apiKey: 'AIzaSyDem_o_HViiX5Ai64gqtkMr8pAezsXUGmw',
  authDomain: 'baseline-25c8a.firebaseapp.com',
  databaseURL: 'https://baseline-25c8a-default-rtdb.firebaseio.com/',
  projectId: 'baseline-25c8a',
  storageBucket: 'gs://baseline-25c8a.appspot.com',
  messagingSenderId: '1084364566085',
  appId: '1:1084364566085:android:49d0cd19344297a7113d2c',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
