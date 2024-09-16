<template>
  <div id="hme_tsk">
    <div class="tsks">
      <h2>Tasks</h2>
      <p>1{{}}</p>
    </div>
    <div class="tsks">
      <h2>Completed</h2>
      <p>1{{}}</p>
    </div>
    <div class="tsks">
      <h2>Pending</h2>
      <p>1{{}}</p>
    </div>
    <div class="tsks">
      <h2>In Progress</h2>
      <p>1{{}}</p>
    </div>
  </div>
  <h1>Good {{}}</h1>
  <taskslist />
</template>

<script>
import Taskslist from "./Taskslist.vue";

export default {
  name: "Home",
  components: {
    Taskslist,
  },
};
</script>

<style></style>
