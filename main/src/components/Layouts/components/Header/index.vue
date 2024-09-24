<script setup lang="ts">


</script>

<template>
  <header class="xy-header">
      <routerLink class="xy-header__NavBarTitle" to="/">
        <img class="xy-header__NavBarTitle--logo" src="../../../../../public/v-b.ico" alt="">
        <span class="xy-header__NavBarTitle--text">北斋</span>
      </routerLink>
    <div class="xy-header__menus">
      <div class="xy-header__menus--Search">
        <svg-icon iconName="icon-search"></svg-icon>
        <input type="text" placeholder="搜索">
      </div>
      <div class="xy-header__menus--article">
        <svg-icon iconName="icon-wenzhang" color="2c2c2c"></svg-icon>
        文章
        <svg-icon iconName="icon-arrow-down" color="#515151"></svg-icon>
      </div>
      <div class="xy-header__menus--assort">
        <svg-icon iconName="icon-fenlei" color="2c2c2c"></svg-icon>
        分类
        <svg-icon iconName="icon-arrow-down" color="#515151"></svg-icon>
      </div>
      <div class="xy-header__menus--tools">
        <svg-icon iconName="icon-tools2" color="2c2c2c" size=".85em"></svg-icon>
        工具
        <svg-icon iconName="icon-arrow-down" color="#515151"></svg-icon>
      </div>
      <div class="xy-header__menus--about">
        关于
      </div>
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