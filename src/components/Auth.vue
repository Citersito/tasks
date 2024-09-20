<template>
	<div class="auth-page">
		<div class="auth-container">
			<div v-if="showLogin" class="login-form">
				<form @submit.prevent="handleLogin">
					<h2>Inicia Sesión</h2>
					<input
						type="email"
						v-model="email"
						placeholder="Email"
						class="input"
					/>
					<input
						type="password"
						v-model="password"
						placeholder="Password"
						class="input"
					/>
					<button type="submit" class="button">Login</button>
				</form>
				<p>
					Don't have an account?
					<span @click="toggleForm" class="toggle-link">Register</span>
				</p>
			</div>

			<div v-else class="register-form">
				<form @submit.prevent="handleRegister">
					<h2>Registrate</h2>
					<input
						type="email"
						v-model="email"
						placeholder="Email"
						class="input"
					/>
					<input
						type="password"
						v-model="password"
						placeholder="Password"
						class="input"
					/>
					<button type="submit" class="button">Register</button>
				</form>
				<p>
					Already have an account?
					<span @click="toggleForm" class="toggle-link">Login</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showLogin: true,
			email: "",
			password: "",
		};
	},
	methods: {
		toggleForm() {
			this.showLogin = !this.showLogin;
		},
		handleLogin() {
			// lógica para iniciar sesión
			console.log("Login:", this.email, this.password);
		},
		handleRegister() {
			// lógica para registrar usuario
			console.log("Register:", this.email, this.password);
		},
	},
};
</script>
