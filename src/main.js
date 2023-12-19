import { createApp } from 'vue'
import App from './App.vue'
import "./assets/iconfont/iconfont.css"
import "./assets/iconfont/iconfont.js"
import "./input.css";
import "tailwindcss/tailwind.css";
import router from "./router";

import { createPinia } from "pinia";

// 注册全局组件 KIcon
import KIcon from "./components/KIcon.vue";


const app = createApp(App);
app.use(router);
app.component("KIcon", KIcon);
app.use(createPinia());
app.mount("#app");

