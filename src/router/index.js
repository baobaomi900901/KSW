import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
// createWebHistory
// createWebHashHistory, 带哈希值 #

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";

const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
