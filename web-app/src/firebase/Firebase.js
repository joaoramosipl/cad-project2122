import { initializeApp } from 'firebase/app';
import firebaseConfig from './FirebaseConfig.js'
import { getDatabase } from 'firebase/database';

const app = initializeApp(firebaseConfig);

export default getDatabase(app)