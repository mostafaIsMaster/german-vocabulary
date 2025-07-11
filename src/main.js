// FILE: main.js

// Import dependencies and libraries first
import { createApp } from 'vue'
import router from './router'
import 'quasar/src/css/index.sass'
import './style.css'
import { Quasar} from 'quasar'
import App from './App.vue'
// import './axios'

// Create the Vue app instance
const myApp = createApp(App)
myApp.use(router)

myApp.use(Quasar)
myApp.mount('#app')
// console.log('Vue app mounted!'); 

