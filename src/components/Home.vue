<template>
	<div id="hme_tsk">
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
	</div>
	<h1>Good {{ greeting }}</h1>
	<taskslist />
</template>

<script>
import { ref, onMounted } from "vue";
import Taskslist from "./Taskslist.vue";

export default {
	name: "Home",
	components: {
		Taskslist,
	},
	setup() {
		const greeting = ref("");
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
		onMounted(() => {
			updateSaludo();
		});
		return {
			greeting,
		};
	},
};
</script>

<style></style>
