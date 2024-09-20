<template>
	<div id="list-tsks">
		<div v-for="(task, index) in tasks" :key="index" class="tasks">
			<h2 class="tasks-txt">Task: {{ task.taskName }}</h2>
			<!-- Mostramos el nombre de la tarea -->
			<p class="tasks-txt">Category: {{ task.category }}</p>
			<!-- Mostramos la categoría -->
			<p class="tasks-txt">Due Date: {{ task.dueDate }}</p>
			<!-- Mostramos la fecha límite -->
		</div>
	</div>
</template>

<script>
import apiClient from "../services/api"; // Asegúrate de que esta ruta sea correcta

export default {
	name: "Taskslist",
	data() {
		return {
			tasks: [], // Aquí almacenamos las tareas
		};
	},
	mounted() {
		this.getTasks(); // Llamamos a la función para obtener las tareas cuando el componente se monta
	},
	methods: {
		async getTasks() {
			try {
				const response = await apiClient.get("/task");
				console.log("Response data:", response.data); // Verifica la estructura de los datos
				this.tasks = response.data;
				console.log("Tasks stored in component:", this.tasks); // Verifica que los datos se guarden correctamente
			} catch (error) {
				console.error("Error fetching tasks:", error);
				alert("Failed to fetch tasks");
			}
		},
	},
};
</script>
