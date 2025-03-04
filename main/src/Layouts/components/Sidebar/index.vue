<script setup lang="ts">
import {useRouter} from'vue-router';
import SideBarItemLink from "./SideBarItemLink.vue";
//获取路由信息
const router = useRouter();
const linkRoute = router.options.routes.find(route => route.path === '/link');
//确保link存在，获取子路由
const socialLinks = linkRoute?.children || [];

</script>

<template>
  <div class="xy-sidebar">
    <div class="xy-sidebar__card-info">
      <!--介绍-->
      <div class="xy-sidebar__card-info--is-center">
        <div class="xy-sidebar__card-info--is-center--img"></div>
        <h3>北斋</h3>
        <p>内化于心 外化于行</p>
      </div>
      <!--统计信息-->
      <div class="xy-sidebar__card-info--data">
        <router-link to="">
          <div>文章</div>
          <div>123</div>
        </router-link>
        <router-link to="">
          <div>标签</div>
          <div>133</div>
        </router-link>
        <router-link to="">
          <div>分类</div>
          <div>1</div>
        </router-link>
      </div>
      <!--github-->
        <SideBarItemLink to="https://github.com/redioactive" class="xy-sidebar__card-info--btn">
          <svg-icon iconName="icon-github" color="#ffffff"></svg-icon>
          <span>Follow Me</span>
        </SideBarItemLink>
      <!--svgIcon-->
      <div class="xy-sidebar__card-info--icons">
       <SideBarItemLink v-for="link in socialLinks" :key="link.name" :to="link.path">
         <svg-icon :iconName="link.meta?.svgIcon"></svg-icon>
       </SideBarItemLink>
      </div>
    </div>
    <div class="xy-sidebar__card-announcement"></div>
    <div class="xy-sidebar__card-sticky_layout"></div>
  </div>
</template>

<style scoped lang="scss">
@include b(sidebar) {
  @include e(card-info) {
    position: relative;
    overflow: hidden;
    padding: 20px 24px;
    text-align: center;
    border-radius: var(--xy-border-radius-sm);
    background-color: var(--xy-color-background-primary);
    box-shadow: var(--xy-box-shadow-soft);
    @include m(is-center) {
      text-align: center;
      @include m(img) {
        overflow: hidden;
        margin: 0 auto;
        width: 110px;
        height: 110px;
        background-color: lightcoral;
        border-radius: var(--xy-border-radius-circle);
      }
      & > h3 {
        font-weight: 400;
        font-size: var(--xy-font-size-lg);
      }
      & > p {
        margin-top: -.42em;
      }
    }
    @include m(data) {
      margin: 14px 0 4px;
      display: table;
      width: 100%;
      table-layout: fixed;
      & > a {
        display: table-cell;
      }
      & > a > div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      & > a > div:nth-child(1) {
        color: var(--xy-color-text-primary);
      }
      & > a > div:nth-child(2) {
        margin-top: .18em;
        color: var(--xy-color-text-secondary);
        font-size: var(--xy-font-size-md);
      }
    }
    @include m(btn) {
      display: block;
      margin-top: var(--xy-spacing-sm);
      background-color: var(--xy-color-button-background);
      color: var(--xy-color-button-text);
      text-align: center;
      line-height: 2.4;
      & > span {
        padding-left: 15px;
      }
    }
    @include m(icons) {
      margin: 6px 0 -6px;
      & > a {
        margin: 0 10px;
        font-size: 1.4em;
      }
    }
  }
}
</style>