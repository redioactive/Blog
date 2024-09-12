<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <h1>这是主应用</h1>
  <WujieVue name="vue3" url="http://localhost:5174/"></WujieVue>
  <WujieVue name="react" url="http://localhost:5175/"></WujieVue>

  <RouterView />
</template>

<style scoped>

</style>
