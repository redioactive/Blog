<script setup lang="ts">
import {storeToRefs} from "pinia";
import Menus from '../Menus/index.vue'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import {useSettingStore} from "@/stores/modules/settings";

const settingsStore = useSettingStore()
const {showThemeSwitch} = storeToRefs(settingsStore)
</script>

<template>
  <header class="xy-header">
    <div class="xy-header__NavBar">
      <div class="xy-header__NavBar--container">
        <routerLink class="xy-header__NavBar--container--NavBarTitle" to="/">
          <svg-icon iconName="icon-Vue"></svg-icon>
          <span>北斋</span>
        </routerLink>
        <div class="xy-header__NavBar--container--content">
          <div class="xy-header__NavBar--container--content--Search">
            <svg-icon iconName="icon-search"/>
            <button>搜索</button>
          </div>
          <Menus></Menus>
          <ThemeSwitch v-if="showThemeSwitch" class="xy-header__NavBar--container--content--Switch"></ThemeSwitch>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@include b(header) {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  @include e(NavBar) {
    position: relative;
    border-bottom: 1px solid rgba(84, 84, 84, .48);
    padding: 0 12px 0 24px;
    height: 55px;
    background-color: #fff;
    white-space: nowrap;
    @include m(container) {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1337px;
      @include m(NavBarTitle) {
        display: flex;
        align-items: center;
        padding-top: 1px;
        height: 55px;
        transition: opacity .25s;
      }
      @include m(content) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
        @include m(Switch) {
          padding: 0 10px;
          cursor: pointer;
          color: #1a1a1a;
          @include m(right-menu-avatar) {
            display: flex;
            align-items: center;
            @include m(el-avatar) {
              margin-right: 10px;
            }
            span {
              font-size: 16px;
            }
          }
        }
        @include m(Search) {
          display: flex;
          align-items: center;
          padding-left: 16px;
          cursor: pointer;
          > button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            width: 48px;
            height: 55px;
            cursor: pointer;
            font-weight: 500;
            padding: 0 8px;
            user-select: none;
            border: 0;
            background-color: transparent;
          }
        }
      }
    }
  }
}

@media(min-width: 960px) {
  @include b(header) {
    position: fixed;
    top: 0;
    width: 100%;
  }
}
</style>