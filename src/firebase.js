import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB-CWi83Y22c63W0EQY8fFRnO0VouDHQnc",
  authDomain: "dummy-yt-clone-26446.firebaseapp.com",
  projectId: "dummy-yt-clone-26446",
  storageBucket: "dummy-yt-clone-26446.appspot.com",
  messagingSenderId: "773444594602",
  appId: "1:773444594602:web:4f57c9143648a3da0119d3"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()


