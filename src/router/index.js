import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Tasks from "@/components/Tasks.vue";
import Calendar from "@/components/Calendar.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/tasks", component: Tasks },
  { path: "/calendar", component: Calendar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
