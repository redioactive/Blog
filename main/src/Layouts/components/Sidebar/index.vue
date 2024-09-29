<script setup lang="ts">

</script>

<template>
  <div class="xy-sidebar">
    <div class="xy-sidebar__card-info">
      <div class="xy-sidebar__card-info--is-center">
        <div class="xy-sidebar__card-info--is-center--img"></div>
        <h3>北斋</h3>
        <p>内化于心 外化于行</p>
      </div>
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
      <routerLink to="https://github.com/redioactive" class="xy-sidebar__card-info--btn">
        <svg-icon iconName="icon-github" color="#ffffff"></svg-icon>
        <span>Follow Me</span>
      </routerLink>
      <div class="xy-sidebar__card-info--icons">
        <router-link to="">
          <svg-icon iconName="icon-rss"></svg-icon>
        </router-link>
        <router-link to="">
          <svg-icon iconName="icon-zhandianditu"></svg-icon>
        </router-link>
        <router-link to="">
          <svg-icon iconName="icon-email1"></svg-icon>
        </router-link>
        <router-link to="">
          <svg-icon iconName="icon-bilibili"></svg-icon>
        </router-link>
        <router-link to="">
          <svg-icon iconName="icon-wangyiyun"></svg-icon>
        </router-link>
        <router-link to="">
          <svg-icon iconName="icon-github"></svg-icon>
        </router-link>
        <router-link to="">
          <svg-icon iconName="icon-weixin"></svg-icon>
        </router-link>
        <router-link to="">
          <svg-icon iconName="icon-juejin"></svg-icon>
        </router-link>
        <router-link to="">
          <svg-icon iconName="icon-tubiaozhizuomoban"></svg-icon>
        </router-link>
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
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
    @include m(is-center) {
      text-align: center;
      @include m(img) {
        overflow: hidden;
        margin: 0 auto;
        width: 110px;
        height: 110px;
        background-color: lightcoral;
        border-radius: 70px;
      }
      & > h3 {
        font-weight: 400;
        font-size: 1.57em;
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
        color: #4c4948;
      }
      & > a > div:nth-child(2) {
        margin-top: -.32em;
        color: #1f2d3d;
        font-size: 1.4em;
      }
    }
    @include m(btn) {
      display: block;
      margin-top: 14px;
      background-color: #1ca7ee;
      color: #fff;
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