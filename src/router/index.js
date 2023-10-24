import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
// createWebHistory
// createWebHashHistory, 带哈希值 #

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import test from "../pages/test.vue";


const routes = [
    {
        path: "/",
        component: Login,
        name: "Login",
    },
    {
        path: "/test",
        component: test,
        name: "test",
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
