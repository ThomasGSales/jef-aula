import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import config from './firebaseConfig.json'

const firebaseConfig = config.firebaseConfig;

// inicializa o firebase
const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app);

// inicializar o firestore e auth
export const db = getFirestore(app)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { firestore, auth, googleProvider };