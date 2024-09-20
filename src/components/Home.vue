<template>
	<div id="hme_tsk">
		<!-- Secciones de las tareas -->
		<div class="tsks">
			<h2>Tasks</h2>
			<p>1{{}}</p>
		</div>
		<div class="tsks">
			<h2>Completed</h2>
			<p>1{{}}</p>
		</div>
		<div class="tsks">
			<h2>Pending</h2>
			<p>1{{}}</p>
		</div>
		<div class="tsks">
			<h2>In Progress</h2>
			<p>1{{}}</p>
		</div>
		<!-- Botón para abrir el modal -->
		<button @click="openModal">Create New Task</button>
	</div>

	<!-- Saludo dinámico -->
	<h1>Good {{ greeting }}</h1>
	<taskslist />

	<!-- Modal para crear una tarea -->
	<NewTask v-if="showModal" @close="closeModal" @create-task="createTask" />
</template>

<script>
import { ref, onMounted } from "vue";
import Taskslist from "./Taskslist.vue"; // Asegúrate de importar el modal
import NewTask from "./NewTask.vue";

export default {
	name: "Home",
	components: {
		Taskslist,
		NewTask, // Importa el modal aquí
	},
	setup() {
		const greeting = ref("");
		const showModal = ref(false); // Estado para controlar la visibilidad del modal

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

		const openModal = () => {
			showModal.value = true;
		};

		const closeModal = () => {
			showModal.value = false;
		};

		const createTask = (task) => {
			// Lógica para agregar la tarea
			console.log("Nueva tarea creada:", task);
			closeModal();
		};

		onMounted(() => {
			updateSaludo();
		});

		return {
			greeting,
			showModal,
			openModal,
			closeModal,
			createTask,
		};
	},
};
</script>

<style></style>
