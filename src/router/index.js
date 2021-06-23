import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    mode: history,
    base: '/',
    routes,
  });
  
  export default router;