import { createApp } from 'vue'
import './style.css'
import router from "./router/index.js"
import { createPinia } from 'pinia'
import axios from 'axios'
window.axios = axios

import {
    Table,
    Card,
    Menu,
    List,
    Drawer, 
    Button,
    message 
} from 'ant-design-vue';
import App from './App.vue'


import './static/fontawesome-free-6.5.2-web/css/all.min.css'
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap-utilities.min.css"

const app = createApp(App);
const pinia = createPinia()
app.use(pinia)
app.use(router);
app.use(Table);
app.use(Card);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.mount('#app')

app.config.globalProperties.$message = message;
