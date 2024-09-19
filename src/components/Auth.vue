<template>
	<div class="auth-container">
		<div v-if="showLogin">
			<Login @toggleForm="toggleForm" />
		</div>
		<div v-else>
			<Signup @toggleForm="toggleForm" />
		</div>
	</div>
</template>

<script>
import Login from "./Login.vue";
import Signup from "./Signup.vue";

export default {
	components: {
		Login,
		Signup,
	},
	data() {
		return {
			showLogin: true,
		};
	},
	methods: {
		toggleForm() {
			this.showLogin = !this.showLogin;
		},
	},
};
</script>

<!-- Los estilos se manejan en el archivo SCSS global, por lo que no se necesita agregar estilos aquí. -->
