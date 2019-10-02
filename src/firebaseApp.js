import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDpNMTk1qw-K36sGFZMqK74HA_fDoQIL70",
  authDomain: "turnout-94987.firebaseapp.com",
  databaseURL: "https://turnout-94987.firebaseio.com",
  projectId: "turnout-94987",
  storageBucket: "",
  messagingSenderId: "246523676358",
  appId: "1:246523676358:web:b10c009965857fbec779c7",
  measurementId: "G-G2ES28MFGX"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
