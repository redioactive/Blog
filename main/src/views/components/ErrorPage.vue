<script setup lang="ts">

</script>

<template>
<div class="xy-error">
  xiaoyu
  <div class="xy-error__inner">小宇2
    <div class="xy-error__inner--set">小宇3</div>
  </div>
</div>
</template>

<style scoped lang="scss">
@include b(error){
  color: red;
  width: vw(300);
  height: vh(100);
  background-color: black;
  margin-left: vw(10);
  margin-top: vh(10);
  border: vh(2) solid red;
  @include e(inner) {
    color: blue;
    @include m(set) {
      color: black;
    }
  }
}
</style>