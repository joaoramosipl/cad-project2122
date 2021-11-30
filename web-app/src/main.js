import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import RulesPage from './components/RulesPage.vue'
import SettingsPage from './components/SettingsPage.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

import { createRouter,
    createWebHashHistory }
        from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            'path': '/',
            'name': 'home',
            'component': HomePage
        },
        {
            'path': '/rules',
            'name': 'rules',
            'component': RulesPage
        },
        {
            'path': '/settings',
            'name': 'settings',
            'component': SettingsPage
        }

    ]
})

createApp(App).use(router).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeLd3CI3mVUU_OUGnEf5O3k7lOxfgVazg",
  authDomain: "cad2122.firebaseapp.com",
  databaseURL: "https://cad2122-default-rtdb.firebaseio.com",
  projectId: "cad2122",
  storageBucket: "cad2122.appspot.com",
  messagingSenderId: "417521977641",
  appId: "1:417521977641:web:6adfbf7acd3be598534f38",
  measurementId: "G-6YWT053E1Z"
};

// Initialize Firebase
initializeApp(firebaseConfig);
