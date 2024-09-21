<script setup lang="ts">
const props = defineProps({
  iconName:{
    type:String,
    require:true
  },
  className:{
    type:String,
    default:""
  },
  color:{
    type:String,
    default:"#409eff"
  },
  size:{
    type:String,
    default:'1em'
  }
})
//图标在 iconfont 中的名字
const iconClassName = computed(() => {
  return `#${props.iconName}`
})
//给图标添加上类名
const svgClass = computed(() => {
  if(props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
</script>

<template>
<svg :class="svgClass" aria-hidden="true">
  <use :xlink:href="iconClassName" :fill="color"></use>
</svg>
</template>

<style scoped lang="scss">
.svg-icon {
  /*使用v-bind将css的值与js的值绑定,注意 v-bind只有vue3才支持*/
  width: v-bind('props.size');
  height: v-bind('props.size');
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>