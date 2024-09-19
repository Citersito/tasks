<template>
	<div class="layout">
		<Navbar />
		<div class="content">
			<div class="container">
				<router-view />
				<dark-mode />
			</div>
		</div>
	</div>
</template>

<script>
import DarkMode from "./DarkMode.vue";
import Navbar from "./Navbar.vue";
export default {
	components: { Navbar, DarkMode },
};
</script>

<style></style>
