// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB6n2nRBXWA08ANnJ2s8R5BdYTU8edSuIg',
  authDomain: 'react-auth-bikesshop.firebaseapp.com',
  projectId: 'react-auth-bikesshop',
  storageBucket: 'react-auth-bikesshop.appspot.com',
  messagingSenderId: '1031103114251',
  appId: '1:1031103114251:web:10862a11feda513d836b0e',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };