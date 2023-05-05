import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqVdPlaiFeDBmFKH_nQIedVBvbXochfeo",
  authDomain: "hannie-bubble-tea.firebaseapp.com",
  projectId: "hannie-bubble-tea",
  storageBucket: "hannie-bubble-tea.appspot.com",
  messagingSenderId: "300788881030",
  appId: "1:300788881030:web:7128d1d93d0773e8ad2307",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
