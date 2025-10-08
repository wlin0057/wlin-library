// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import router from './router'

// import { initializeApp } from 'firebase/app'

//const firebaseConfig = {
//  apiKey: 'AIzaSyAaprVEIPJQEJbffwTxWkAa3ExeUd2rjLc',
//  authDomain: 'week7-wenling.firebaseapp.com',
//  projectId: 'week7-wenling',
//  storageBucket: 'week7-wenling.firebasestorage.app',
//  messagingSenderId: '362969873861',
//  appId: '1:362969873861:web:17ad44d863b1301a5edfac'
//}

// initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { theme: { preset: Aura } })

app.mount('#app')
