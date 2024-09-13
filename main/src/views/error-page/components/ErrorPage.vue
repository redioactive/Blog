<script setup lang="ts">

</script>

<template>
  <div class="xy-container">
    <div class="xy-container__scroll-lock">
      <div class="xy-container__scroll-lock--noise"></div>
      <div class="xy-container__scroll-lock--feather-container"></div>
    </div>
    <article class="xy-container__foreground-content" id="xy-container__scrollContainer">
      <div class="xy-container__error-404-container xy-container__section-intro">
        <slot></slot>
        <div class="xy-container__wrong-way">/* Nothing to see here */</div>
        <div class="xy-container__btn xy-container__btn-style-2">
          <router-link to="/">
            <span class="xy-container__btn--glitch" data-glitch="回退">回退</span>
          </router-link>
        </div>
      </div>
    </article>
  </div>

</template>

<style scoped lang="scss">
@include b(container) {
  color: red;
}
</style>