import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "startup",
      component: () => import("@/views/Startup/Startup.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/Login.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home/Home.vue"),
    },
    {
      path: "/explore",
      name: "explore",
      component: () => import("@/views/Explore/Explore.vue"),
    },
    {
      path: "/my",
      name: "my",
      component: import("@/views/My/My.vue"),
    },
  ],
});

export default router;
