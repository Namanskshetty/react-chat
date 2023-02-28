import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATMDRvW6O89PvBeDrvb0EUUvpFzTCRkYU",
  authDomain: "chat-4d692.firebaseapp.com",
  projectId: "chat-4d692",
  storageBucket: "chat-4d692.appspot.com",
  messagingSenderId: "916008005962",
  appId: "1:916008005962:web:1692e46d852e5b3c9811b3",
  measurementId: "G-EGHBL3D3W1"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
