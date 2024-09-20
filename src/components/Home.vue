<template>
	<div id="hme_tsk">
		<!-- Secciones de las tareas -->
		<div class="tsks">
			<h2>Tasks</h2>
			<p>{{ tasks.length }}</p>
			<!-- Mostrar total de tareas -->
		</div>
		<div class="tsks">
			<h2>Completed</h2>
			<p>{{ completedTasks.length }}</p>
			<!-- Mostrar completadas -->
		</div>
		<div class="tsks">
			<h2>Pending</h2>
			<p>{{ pendingTasks.length }}</p>
			<!-- Mostrar pendientes -->
		</div>
		<div class="tsks">
			<h2>In Progress</h2>
			<p>{{ inProgressTasks.length }}</p>
			<!-- Mostrar en progreso -->
		</div>
		<!-- Botón para abrir el modal -->
		<button @click="openModal">Create New Task</button>
	</div>

	<!-- Saludo dinámico -->
	<h1>Good {{ greeting }}</h1>
	<!-- Pasamos las tareas al componente Taskslist -->
	<Taskslist :tasks="tasks" />

	<!-- Modal para crear una tarea -->
	<NewTask v-if="showModal" @close="closeModal" @create-task="createTask" />
</template>

<script>
import { ref, onMounted } from "vue";
import Taskslist from "./Taskslist.vue"; // Asegúrate de importar el componente TaskList
import NewTask from "./NewTask.vue";
import apiClient from "../services/api"; // Importa el cliente API para obtener las tareas

export default {
	name: "Home",
	components: {
		Taskslist,
		NewTask,
	},
	setup() {
		const greeting = ref("");
		const showModal = ref(false); // Controlar visibilidad del modal
		const tasks = ref([]); // Lista completa de tareas
		const completedTasks = ref([]); // Lista de tareas completadas
		const pendingTasks = ref([]); // Lista de tareas pendientes
		const inProgressTasks = ref([]); // Lista de tareas en progreso

		const updateSaludo = () => {
			const hour = new Date().getHours();
			if (hour > 6 && hour < 12) {
				greeting.value = "Morning";
			} else if (hour >= 12 && hour < 18) {
				greeting.value = "Afternoon";
			} else {
				greeting.value = "Night";
			}
		};

		const getTasks = async () => {
			try {
				const response = await apiClient.get("/task");
				tasks.value = response.data;
				updateTaskCategories();
			} catch (error) {
				console.error("Error fetching tasks:", error);
			}
		};

		const updateTaskCategories = () => {
			// Filtrar las tareas en las diferentes categorías
			completedTasks.value = tasks.value.filter((task) => task.completed);
			pendingTasks.value = tasks.value.filter(
				(task) => !task.completed && new Date(task.dueDate) > new Date()
			);
			inProgressTasks.value = tasks.value.filter(
				(task) => !task.completed && new Date(task.dueDate) <= new Date()
			);
		};

		const openModal = () => {
			showModal.value = true;
		};

		const closeModal = () => {
			showModal.value = false;
		};

		const createTask = (task) => {
			tasks.value.push(task); // Agregamos la nueva tarea
			updateTaskCategories(); // Actualizamos las categorías
			closeModal();
		};

		onMounted(() => {
			updateSaludo();
			getTasks(); // Obtener las tareas cuando el componente se monte
		});

		return {
			greeting,
			showModal,
			openModal,
			closeModal,
			tasks,
			completedTasks,
			pendingTasks,
			inProgressTasks,
			createTask,
		};
	},
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>
