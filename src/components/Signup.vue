<template>
	<div class="containerForm">
		<form @submit.prevent="signup">
			<div>
				<label for="name">Nombre:</label><br />
				<input
					type="text"
					v-model="name"
					required
					class="inp-frm"
					placeholder="Ingresa tu nombre..."
				/>
			</div>
			<div>
				<label for="email">Email:</label><br />
				<input
					type="email"
					v-model="signupEmail"
					required
					class="inp-frm"
					placeholder="Ingresa tu email..."
				/>
			</div>
			<div>
				<label for="password">Password:</label><br />
				<input
					type="password"
					v-model="signupPassword"
					required
					class="inp-frm"
					placeholder="Ingresa tu contraseña..."
				/>
			</div>
			<button type="submit">Signup</button>
		</form>
		<p>
			¿Ya tienes una cuenta?
			<button @click="$emit('toggleForm')">Inicia sesión aquí</button>
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			signupEmail: "",
			signupPassword: "",
		};
	},
	methods: {
		signup() {
			// Lógica de envío para signup aquí
		},
	},
};
</script>

<!-- Los estilos se manejan en el archivo SCSS global, por lo que no se necesita agregar estilos aquí. -->
