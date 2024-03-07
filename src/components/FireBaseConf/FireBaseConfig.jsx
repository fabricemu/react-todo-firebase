import { initializeApp } from "firebase/app";
import {} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCQOexnZqHcNGje3Puui-4E21VttZJCeMA",
  authDomain: "myts-todo-app.firebaseapp.com",
  projectId: "myts-todo-app",
  storageBucket: "myts-todo-app.appspot.com",
  messagingSenderId: "688627849744",
  appId: "1:688627849744:web:fe6e22ee50d5f730af8895",
  measurementId: "G-F2P2SCQEM7"
};
const app = initializeApp(firebaseConfig);

export default app
