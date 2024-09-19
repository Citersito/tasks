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
	// data() {
	// 	return {
	// 		datos: null,
	// 		variable: "",
	// 	};
	// },
	// mounted() {
	// 	this.fetchData();
	// },
	// methods: {
	// 	fetchData() {
	// 		apiClient
	// 			.get("/variable")
	// 			.then((response) => {
	// 				this.datos = response.data;
	// 				this.variable = response.data.variable;
	// 			})
	// 			.catch((error) => {
	// 				console.error("Hubo un error en la solicitud: ", error);
	// 			});
	// 	},
	// },
};
</script>

<style>
/* Tus estilos aquí */
</style>
