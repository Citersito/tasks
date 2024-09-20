<template>
	<div class="modal">
		<div class="modal-content">
			<h2>Create a New Task</h2>
			<form @submit.prevent="handleSubmit">
				<div>
					<label for="taskName">Task Name:</label>
					<input v-model="taskName" type="text" required />
				</div>
				<div>
					<label for="category">Category:</label>
					<select v-model="category" required>
						<option value="Work">Work</option>
						<option value="Personal">Personal</option>
					</select>
				</div>
				<div>
					<label for="dueDate">Due Date:</label>
					<input v-model="dueDate" type="date" required />
				</div>
				<button type="submit">Create Task</button>
				<button type="button" @click="$emit('close')">Cancel</button>
			</form>
		</div>
	</div>
</template>

<script>
import apiClient from "../services/api"; // Asegúrate de que apiClient esté configurado correctamente

export default {
	data() {
		return {
			taskName: "",
			category: "Work",
			dueDate: "",
		};
	},
	methods: {
		async handleSubmit() {
			try {
				const response = await apiClient.post("/tasks", {
					taskName: this.taskName,
					category: this.category,
					dueDate: this.dueDate,
				});
				console.log(response.data);
				alert("Task created successfully!");
				this.$emit("close"); // Cierra el modal
			} catch (error) {
				console.error(error);
				alert("Failed to create task");
			}
		},
	},
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>
