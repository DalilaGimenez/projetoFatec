import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAioo9KPMIQivM4PrGySdKF3dvvUKwTBcU",
  authDomain: "projetofatec-cc717.firebaseapp.com",
  projectId: "projetofatec-cc717",
  storageBucket: "projetofatec-cc717.appspot.com",
  messagingSenderId: "219108938172",
  appId: "1:219108938172:web:030a0949a9277966d9dbb9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };

