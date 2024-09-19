<template>
	<button @click="toggleTheme" class="toggle-mode">
		{{ isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode" }}
	</button>
</template>

<script>
export default {
	data() {
		return {
			isDarkMode: false,
		};
	},
	created() {
		// Revisar si el usuario tiene una preferencia guardada
		this.isDarkMode = localStorage.getItem("isDarkMode") === "true";
		this.applyTheme();
	},
	methods: {
		toggleTheme() {
			this.isDarkMode = !this.isDarkMode;
			localStorage.setItem("isDarkMode", this.isDarkMode);
			this.applyTheme();
		},
		applyTheme() {
			document.documentElement.classList.toggle("dark-mode", this.isDarkMode);
		},
	},
};
</script>

<style scoped>
.toggle-mode {
	cursor: pointer;
	padding: 10px;
	background-color: #eee;
	border: none;
	border-radius: 5px;
	font-size: 16px;
}
</style>
