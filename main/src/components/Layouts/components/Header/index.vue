<script setup lang="ts">
import {SearchOutlined} from '@ant-design/icons-vue'

</script>

<template>
  <header class="xy-header">
      <routerLink class="xy-header__NavBarTitle" to="/">
        <img class="xy-header__NavBarTitle--logo" src="../../../../../public/v-b.ico" alt="">
        <span class="xy-header__NavBarTitle--text">北斋</span>
      </routerLink>
    <div class="xy-header__menus">
      <div class="xy-header__menus--Search">
        <SearchOutlined />
        <input type="text" placeholder="搜索">
      </div>
      <div class="xy-header__menus--article">文章</div>
      <div class="xy-header__menus--assort">分类</div>
      <div class="xy-header__menus--tools">工具</div>
      <div class="xy-header__menus--about">关于</div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@include b(header) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid lightcoral;

  @include e(NavBarTitle) {
    display: flex;
    padding: 8px 15px;
    font-size: 20px;
    @include m(text){
      color: #000000;
    }
    @include m(logo) {
      object-fit: cover;
    }
  }
  @include e(menus) {
    display: flex;
    padding: 8px 15px;
    justify-content: end;
    @include m(Search) {

      >input {
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        width: 150px;
      }
    }
    >div{
      margin: 0 15px;
    }
  }
}
</style>