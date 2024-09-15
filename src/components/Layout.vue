<template>
  <div class="layout">
    <Navbar />
    <div class="content">
      <div class="container"><router-view /></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style></style>
