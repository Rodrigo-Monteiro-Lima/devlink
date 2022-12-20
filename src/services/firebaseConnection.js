import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCGft7rt5dFiX8kFJxUwrCj3badR8YoKMY',
  authDomain: 'devlinks-a315b.firebaseapp.com',
  projectId: 'devlinks-a315b',
  storageBucket: 'devlinks-a315b.appspot.com',
  messagingSenderId: '1040822504163',
  appId: '1:1040822504163:web:4a1f32144f103e45eb93d6',
  measurementId: 'G-NKWQW3GSZN',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
