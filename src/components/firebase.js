import firebase from "firebase/app"
import "firebase/auth"


const app = firebase.initializeApp({
  apiKey: "AIzaSyAIuHBUg7lik6HmCiE1INUF7w-5qSwH_aE",
  authDomain: "my-to-do-40608.firebaseapp.com",
  projectId: "my-to-do-40608",
  storageBucket: "my-to-do-40608.appspot.com",
  messagingSenderId: "841768335331",
  appId: "1:841768335331:web:fc5636f06b5a067a9812d6"
})

export const auth = app.auth()
export default app


