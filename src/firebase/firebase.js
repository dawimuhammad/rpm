import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCvTvt6l_CPgJz6YEdGwhWFuLB_5VVSgck",
    authDomain: "react-passwords-manager.firebaseapp.com",
    databaseURL: "https://react-passwords-manager.firebaseio.com",
    projectId: "react-passwords-manager",
    storageBucket: "react-passwords-manager.appspot.com",
    messagingSenderId: "1023259487904"
}

firebase.initializeApp(config)

const firestore = firebase.firestore()

const settings = {
  timestampsInSnapshots: true
}

firestore.settings(settings)

export const database = firestore
