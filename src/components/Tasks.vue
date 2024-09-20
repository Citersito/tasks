<template>
	<!-- <h1>tasks {{ variable }}</h1> -->
	<taskslist />
</template>

<script>
// import apiClient from "@/services/api";
import Taskslist from "./Taskslist.vue";

export default {
	name: "Tasks",
	components: {
		Taskslist,
	},
};
</script>

<style>
/* Tus estilos aquí */
</style>
