<script setup lang="ts">
import {SideBar, Footer, Header, Content} from "@/components/Layouts/components";

</script>

<template>
    <Header></Header>
  <div class="xy-container">
    <div class="xy-container__content">
      <Content></Content>
    </div>
    <div class="xy-container__sidebar">
      <SideBar></SideBar>
    </div>
  </div>
    <Footer></Footer>
</template>

<style scoped lang="scss">


@include b(container) {
  display: grid;
  grid-template-columns: 70% 30%;
  max-width: 1200px;
  padding: 40px 15px;
  margin: 0 auto;
  width: 100%;
  @include e(content) {
    width: 100%;
    height: 700px;
  }
  @include e(sidebar) {
    width: 75%;

  }
}

@include b(footer) {
  width: 100%;
  height: 50px;
  background-color: lightgreen;
}
</style>