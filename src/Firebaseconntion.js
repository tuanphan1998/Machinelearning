import * as firebase from 'firebase';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAUiB9zPQOu5p1m6ZSQ4ttQP1G_xrrVMV4",
    authDomain: "luudulieunguoidung.firebaseapp.com",
    databaseURL: "https://luudulieunguoidung.firebaseio.com",
    projectId: "luudulieunguoidung",
    storageBucket: "luudulieunguoidung.appspot.com",
    messagingSenderId: "1061601470698",
    appId: "1:1061601470698:web:807744e3e4265fb3e48f93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Khach hang
export const Firebaseone = firebase.database().ref('KhachHang');