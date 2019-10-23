import app from 'firebase/app'
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: "1:162821668288:web:4c448fc5018bf0ad37dc25"
  };
  // Initialize Firebase
  class Firebase{
    constructor() {
      app.initializeApp(firebaseConfig);
    }
    
  } 

  export default Firebase;