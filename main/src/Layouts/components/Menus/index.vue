<script setup lang="ts">

interface MenuItem {
    class:string,
    iconName?:string,
    color?:string,
    label:string
}
type MenusListType = MenuItem[]

const MenuList = ref<MenusListType>([
  {
    class: 'xy-menus__article',
    iconName: 'icon-wenzhang',
    color: '2c2c2c',
    label: '文章'
  },
  {
    class: "xy-menus__assort",
    iconName: 'icon-fenlei',
    color: '2c2c2c',
    label: '分类'
  },
  {
    class: 'xy-menus__tools',
    iconName: 'icon-tools2',
    color: '2c2c2c',
    label: '工具'
  },
  {
    class: "xy-menus__about",
    label: '关于'
  }
])

</script>

<template>
  <nav class="xy-menus">
    <div  v-for="(menu,index) in MenuList" :key="index" :class="menu.class">
      <button class="xy-menus__container--button" >
        <span class="xy-menus__container--button--title">
        <svg-icon :iconName="menu.iconName" :color="menu.color"/>
          {{menu.label}}
        <svg-icon iconName="icon-arrow-down" color="#515151"/>
      </span>
      </button>
      <div class="xy-menus__article--flout"></div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@include b(menus) {
  display: flex;
  padding: 0 15px;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  @include e(container){
    display: block;
    @include m(button) {
      display: flex;
      align-items: center;
      padding: 0 12px;
      height: 55px;
      color: #fff;
      transition: color .5s;
      border: none;
      background-color: transparent;
      @include m(title) {
        display: flex;
        align-items: center;
        line-height: 55px;
        font-size: 13px;
        font-weight: 500;
        color: #000;
        transition: color .25s;
        white-space: nowrap;
      }
    }
  }
}
</style>