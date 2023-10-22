import './styles/main.scss'

import UIkit from 'uikit';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.provide('isMobile', window.innerWidth < 992 );
app.use(router)
app.mount('#app')
