import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

import { initializeApp } from 'firebase/app';
import firebaseConfig from './FirebaseConfig.js'
import { getDatabase } from 'firebase/database';

const app = initializeApp(firebaseConfig);

createApp(App).mount('#app')

export default getDatabase(app)