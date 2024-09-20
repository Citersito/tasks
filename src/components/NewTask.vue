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
import { ref } from "vue";

export default {
	name: "NewTask",
	setup(_, { emit }) {
		const taskName = ref("");
		const category = ref("Work");
		const dueDate = ref("");

		const handleSubmit = () => {
			const newTask = {
				taskName: taskName.value,
				category: category.value,
				dueDate: dueDate.value,
			};
			emit("create-task", newTask);
		};

		return {
			taskName,
			category,
			dueDate,
			handleSubmit,
		};
	},
};
</script>
