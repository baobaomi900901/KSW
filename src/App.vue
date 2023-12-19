<template>
  <div id="app" class="body flex flex-col">
    <KStatusBar />
    <KMenuBar />
    <router-view />
  </div>
</template>

<script setup>
import KStatusBar from "./components/KStatusBar.vue";
import KMenuBar from "./components/KMenuBar.vue";
</script>

<style scoped>
.body {
  height: 100vh;
}
#app {
  height: 100vh;
}

.aaa {
  height: 2rem;
  width: 4rem;
  border: 1px solid #ddd;
  margin: 1rem;
}

.bbb {
  height: 32px;
  width: 64px;
  border: 1px solid #ddd;
  margin: 16px;
}
</style>
