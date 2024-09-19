<template>
	<nav class="navbar">
		<h1 id="txt-nvb">Tasks</h1>
		<router-link to="/" custom v-slot="{ navigate }">
			<div class="btn-nvp" @click="navigate">
				<p class="txtbtn-nvb">Inicio</p>
			</div></router-link
		>
		<router-link to="/tasks" custom v-slot="{ navigate }">
			<div class="btn-nvp" @click="navigate">
				<p class="txtbtn-nvb">My tasks</p>
			</div></router-link
		>
		<router-link to="/calendar" custom v-slot="{ navigate }">
			<div class="btn-nvp" @click="navigate">
				<p class="txtbtn-nvb">Calendar</p>
			</div></router-link
		>
		<router-link to="/auth" custom v-slot="{ navigate }">
			<div class="btn-nvp" @click="navigate">
				<p class="txtbtn-nvb">Login</p>
			</div></router-link
		>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
};
</script>

<style></style>
