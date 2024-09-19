<template>
	<div class="containerForm">
		<form @submit.prevent="login">
			<div>
				<label for="email">Email:</label><br />
				<input
					type="email"
					v-model="email"
					required
					class="inp-frm"
					placeholder="Ingresa tu email..."
				/>
			</div>
			<div>
				<label for="password">Password:</label><br />
				<input
					type="password"
					v-model="password"
					required
					class="inp-frm"
					placeholder="Ingresa tu contraseña..."
				/>
			</div>
			<button type="submit">Login</button>
		</form>
		<p>
			¿No tienes una cuenta?
			<button @click="$emit('toggleForm')">Regístrate aquí</button>
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		login() {
			// Lógica de envío para login aquí
		},
	},
};
</script>

<!-- Los estilos se manejan en el archivo SCSS global, por lo que no se necesita agregar estilos aquí. -->
