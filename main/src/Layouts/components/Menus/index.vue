<script setup lang="ts">
import {useMenuStore} from "@/stores/modules/flyout";
import {storeToRefs} from 'pinia'

const menuStore = useMenuStore();
// 使用storeToRefs保持响应式
const {MenuList,activeFlyoutIndex} = storeToRefs(menuStore);
</script>
<template>
  <nav class="xy-menus">
    <div class="xy-menus__Group" v-for="(menu,index) in MenuList" :key="index" :class="menu.class">
      <button class="xy-menus__Group--button" :aria-expanded="activeFlyoutIndex === index" aria-haspopup="true" @mouseenter="menuStore.showFlyout(index)" @mouseleave="menuStore.hideFlyout">
        <span class="xy-menus__Group--button--text">
        <svg-icon style="font-size: 18px" :iconName="menu.iconName" :color="menu.color"/>
          {{ menu.label }}
        <svg-icon v-if="menu.label !== '关于'" iconName="icon-arrow-down" color="#515151"/>
      </span>
      </button>
      <div class="xy-menus__Group--Flyout" v-if=" menu.items && menu.items?.length > 0" @mouseenter="menuStore.showFlyout(index)" @mouseleave="menuStore.hideFlyout">
        <div class="xy-menus__Group--Flyout--Menu" >
          <div class="xy-menus__Group--Flyout--Menu--items" v-for="(item,itemIndex) in menu.items" :key="itemIndex">
            <router-link class="xy-menus__Group--Flyout--Menu--items--link" :to="item.link">{{item.label}}</router-link>
          </div>
        </div>
      </div>
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
  @include e(Group) {
    position: relative;
    border-bottom: 1px solid rgba(84, 84, 84, .48);
    padding: 0 12px 0 24px;
    height: var(--xy-nav-height);
    background-color: #fff;
    white-space: nowrap;
    transition: border-color .5s, background-color .5s;
    @include m(button) {
      display: flex;
      align-items: center;
      padding: 0 12px;
      height: 55px;
      color: #fff;
      transition: color .5s;
      border: none;
      background-color: transparent;
      &[aria-expanded=true] + .xy-menus__Group--Flyout {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      }
      > .svg-icon {
        font-weight: 400;
      }
      @include m(text) {
        display: flex;
        align-items: center;
        line-height: 55px;
        font-size: 15px;
        font-weight: 500;
        color: #000;
        transition: color .25s;
        white-space: nowrap;
        .svg-icon {
          margin: 0 4px;
        }
      }
    }

    @include m(Flyout) {
      display: flex;
      position: absolute;
      top: calc(var(--xy-nav-height) / 2 + 15px);
      right: 0;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4px);
      transition: opacity .25s, visibility .25s, transform .25s;
      max-height: calc(100vh - var(--xy-nav-height) - var(--xy-banner-height, 0px));
      @include m(Menu) {
        border-radius: 8px;
        padding: 12px 0;
        min-width: 192px;
        border: 1px solid transparent;
        background: #1a1a1a;
        box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
        transition: background-color .5s;
        overflow: auto;
        @include m(items) {
          transition: border-color .5s;
          @include m(link) {
            display: block;
            padding: 0 18px;
            line-height: 28px;
            font-size: 13px;
            font-weight: 400;
            color: rgba(255, 255, 255, .87);
            white-space: nowrap;
            transition: color .25s;
          }
        }
      }
    }
  }
}
</style>