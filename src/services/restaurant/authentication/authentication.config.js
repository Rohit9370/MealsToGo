import { initializeApp, getApps } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { getAuth,initializeAuth,getReactNativePersistence} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4DWNbKFMwnOrsAqyD05XWVIWqnKtHl3g",
  authDomain: "mealstogo-d311b.firebaseapp.com",
  projectId: "mealstogo-d311b",
  storageBucket: "mealstogo-d311b.appspot.com",
  messagingSenderId: "98729424734",
  appId: "1:98729424734:web:7a0cf6281dfb13948f41cf",
};

// Initialize Firebase only if it hasn't been initialized ye
 let app=null;
 let auth=null;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
 auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
}
export { app,auth };