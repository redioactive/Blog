<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <h1>这是主应用</h1>
  <div class="content">
    <p></p>
  </div>
  <WujieVue name="vue3" url="http://localhost:5174/"></WujieVue>
  <WujieVue name="react" url="http://localhost:5175/"></WujieVue>

</template>

<style scoped lang="scss">
.content {
  width: 200px;
  height: 200px;
  background-color: red;
  p{
    width: 25px;
    height: 25px;
    background-color: aquamarine;
  }
}
</style>
