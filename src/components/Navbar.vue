<template>
	<nav class="navbar">
		<h1 id="txt-nvb">Tasks</h1>
		<router-link to="/" custom v-slot="{ navigate }">
			<div class="btn-nvp" @click="navigate">
				<p class="txtbtn-nvb">Inicio</p>
			</div>
		</router-link>
		<router-link to="/tasks" custom v-slot="{ navigate }">
			<div class="btn-nvp" @click="navigate">
				<p class="txtbtn-nvb">My tasks</p>
			</div>
		</router-link>
		<router-link to="/calendar" custom v-slot="{ navigate }">
			<div class="btn-nvp" @click="navigate">
				<p class="txtbtn-nvb">Calendar</p>
			</div>
		</router-link>
		<!-- Si no hay sesión, muestra el botón de Login -->
		<router-link to="/auth" custom v-slot="{ navigate }">
			<div class="btn-nvp" @click="navigate" v-if="!session">
				<p class="txtbtn-nvb">Login</p>
			</div>
		</router-link>
		<!-- Si hay sesión, muestra el botón de Logout -->
		<div class="btn-nvp" @click="logout" v-if="session">
			<p class="txtbtn-nvb">Logout</p>
		</div>
		<DarkMode />
	</nav>
</template>

<script>
import DarkMode from "./DarkMode.vue";
import checkSession from "../services/authServices";
import { onMounted, ref } from "vue";

export default {
	name: "Navbar",
	components: {
		DarkMode,
	},
	setup() {
		const session = ref(null);

		const logout = () => {
			// Eliminar la sesión del localStorage
			localStorage.removeItem("session");
			session.value = null;
		};

		onMounted(async () => {
			session.value = await checkSession();
		});

		return {
			session,
			logout, // Añadimos el método logout
		};
	},
};
</script>

<style></style>
