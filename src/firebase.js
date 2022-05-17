import firebase from "firebase/compat/app";
import "firebase/compat/database";


// const firebaseConfig = {
//   apiKey: "AIzaSyCrYN90OMlcVKKvWk1Muvf49eFUJ0PgJX0",
//   authDomain: "react-project-cea71.firebaseapp.com",
//   projectId: "react-project-cea71",
//   storageBucket: "react-project-cea71.appspot.com",
//   messagingSenderId: "1061425591845",
//   appId: "1:1061425591845:web:cf5e5ca176c23cb6ee31cc"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBtsgTpPW6Wd-nKodUt5Jmti64LGlYXxXw",
  authDomain: "fir-tutorial-8d86a.firebaseapp.com",
  databaseURL: "https://fir-tutorial-8d86a-default-rtdb.firebaseio.com",
  projectId: "fir-tutorial-8d86a",
  storageBucket: "fir-tutorial-8d86a.appspot.com",
  messagingSenderId: "1070425503708",
  appId: "1:1070425503708:web:fdbc8498adda923f5a0119"
};


const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();