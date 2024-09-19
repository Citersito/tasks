import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Tasks from "@/components/Tasks.vue";
import Calendar from "@/components/Calendar.vue";
import Auth from "@/components/Auth.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/tasks", component: Tasks },
	{ path: "/calendar", component: Calendar },
	{ path: "/auth", component: Auth },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
