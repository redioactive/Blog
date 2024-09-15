<script setup lang="ts">
import ErrorPage from "./components/ErrorPage.vue";

</script>

<template>
<ErrorPage>
  <div class="xy-huge404">404</div>
</ErrorPage>
</template>

<style scoped lang="scss">
@import './components/styles/numPage.scss';
@include b('huge404') {
  @include glitch-effect();
  &::before, &::after {
    content: "404";
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0
  }
}
</style>