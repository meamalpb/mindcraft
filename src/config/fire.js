import firebase from 'firebase';

 // Your web app's Firebase configuration
//  var firebaseConfig = {
//     apiKey: "AIzaSyBXDx_-g_Pkp47ltx4UvBowYDv6fmfO7dY",
//     authDomain: "myapp4-3fb52.firebaseapp.com",
//     databaseURL: "https://myapp4-3fb52.firebaseio.com",
//     projectId: "myapp4-3fb52",
//     storageBucket: "myapp4-3fb52.appspot.com",
//     messagingSenderId: "664257894567",
//     appId: "1:664257894567:web:c8b6d24db085ff9d57e382"
//   };
var firebaseConfig = {
  apiKey: "AIzaSyDArk1BKW3tu_m5jr_mVnxq_2c1bSe0MI4",
  authDomain: "project-98753.firebaseapp.com",
  databaseURL: "https://project-98753.firebaseio.com",
  projectId: "project-98753",
  storageBucket: "project-98753.appspot.com",
  messagingSenderId: "964263622094",
  appId: "1:964263622094:web:422332d971b2d20537679f",
  measurementId: "G-DF3VR09NG9"
};
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;