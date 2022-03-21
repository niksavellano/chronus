import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvREYdtK2B4N4906p8Allhj3qVwgTtTlk",
  authDomain: "chronus-9d975.firebaseapp.com",
  databaseURL: "https://chronus-9d975.firebaseio.com",
  projectId: "chronus-9d975",
  storageBucket: "chronus-9d975.appspot.com",
  messagingSenderId: "870006887941",
  appId: "1:870006887941:web:09ceaa3e7f22121a7d6e6c",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
