<script setup lang="ts">

</script>

<template>
  <div class="xy-item">
    <div class="xy-item__left">
      <img src="file:///D:/image/jgnr.jpg" alt="">
    </div>
    <div class="xy-item__info">
      <router-link to="">
        北斋的TypeScript笔记
      </router-link>
      <div class="xy-item__info--article">
        <span>
          <svg-icon iconName="icon-uniF073" color="#bfbfbf"></svg-icon>
          <span>发表于</span>
          <time>2024-9-22</time>
        </span>
        <span class="xy-item__article--Meta">
         <svg-icon iconName="icon-inbox" color="#bfbfbf"></svg-icon>
          <router-link to="">
            Others
          </router-link>
        </span>
        <span class="xy-item__article--tags">
         <svg-icon iconName="icon-tag1" color="#bfbfbf"></svg-icon>
          <router-link to="">
            Linux
          </router-link>
          <span>• </span>
          <router-link to="">配置</router-link>
        </span>
      </div>
      <div class="xy-item__info--content">
        你是否羡慕人家 Arch Linux 那酷炫的平铺式桌面，现在不必再自卑了，使用目前最新的 Ubuntu
        也是可以做到通用酷炫的效果。那么准备好电脑，跟着本文开始行动起来吧！


        前言概要硬件介绍最近家电下乡各种优惠补贴很多，国光我也忍不住剁手下单了一台性价比很高的笔记本，机械革命无界 15X
        暴风雪版本，默认是 32 + 1TB 的配置，我也自行升级了一下，目前详细的配置如下：


        组件
        型号


        CPU
        AMD Ryzen™ 7 8845HS 8 大核 16 线程 最大睿频 5.1Ghz


        GPU
        AMD Radeon™ 780M（GTX 1060 级别）


        电池
        99Wh 超大电池


        内存
        48GB 双 24GB DDR5 5600Mhz


        SSD1
        出厂自带的英睿达 P3 Plus PCIe4.0 1TB


        SSD2
        西数 SN770 PCIe 4.0 2TB


        屏幕
        15.3 寸 16:10 比例 2560x1600 分辨率 120Hz 400nits IPS


        网卡
        Intel WiFi6 AX200 160Mhz + 裕太微千兆有线网卡 YT6801


        系统简介 U ...
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@include b(item) {
  display: grid;
  grid-template-columns: 45% 55%;
  height: 16em;
  align-items: center;
  border-radius: 8px;
  margin: 0 20px;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
  @include e(left) {
    width: 100%;
    height: 100%;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }
  @include e(info) {
    padding: 0 40px;
    > a {
      color: #1a1a1a;
      font-size: 1.72em;
      line-height: 1.4;
    }
    > a:hover {
      color: #1ca7ee;;
    }
    @include m(article) {
      font-size: 90%;
      color: #4c4948;
      margin: 6px 0;

      > span:first-child > span{
        padding-right: 4px;
      }
      > span > a {
        color: #858585;
      }
      >span > a:hover{
        border-bottom: 1px solid #535bf2;
        color:#1ca7ee;;
      }
      > span:nth-child(even) {
        margin: 0 8px;
      }
      > span > svg {
        padding: 0 3px;
      }
      > span:nth-child(n)::after {
        content: "|";
        margin: 0 3px;
        color: #858585;
      }
     > span:last-child::after {
       content:""
     }
    }
    @include m(content) {
      font-size: 14px;
      height: 57px;
      overflow: hidden;
    }
  }
}
</style>