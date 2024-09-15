<script setup lang="ts">
import ErrorPage from './components/ErrorPage.vue'
</script>

<template>
<ErrorPage>
  <div class="xy-huge403">403</div>
</ErrorPage>
</template>

<style scoped lang="scss">
@import './components/styles/numPage.scss';

@include b('huge403') {
  @include glitch-effect();
  &::before,&::after {
    content:"403";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>