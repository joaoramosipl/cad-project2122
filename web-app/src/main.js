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