<template>
	<h1>Calendario</h1>
	<div id="cal">
		<vue-cal />
	</div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
export default {
	components: {
		VueCal,
	},
};
</script>

<style></style>
