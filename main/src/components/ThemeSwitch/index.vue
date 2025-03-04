<script setup lang="ts">
import {type ThemeName, useTheme} from '@/hooks/useTheme'

const {themeList, activeThemeName, setTheme} = useTheme();

const handleChangeTheme = ({clientX, clientY}: MouseEvent, themeName: ThemeName) => {
  const maxRadius = Math.hypot(
      Math.max(clientY, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY)
  )
  const style = document.documentElement.style
  style.setProperty("xy-theme-x", clientX + "px")
  style.setProperty("xy-theme-y", clientY + "px")
  style.setProperty("xy-theme-r", maxRadius + "px")
  const handler = () => {
    setTheme(themeName)
  }
  document.startViewTransition ? document.startViewTransition(handler) : handler();
}
</script>

<template>
  <el-dropdown trigger="click">
    <div>
      <el-tooltip effect="dark" contnet="主题模式" placement="bottom">
        <el-icon :size="20">
          <svg-icon iconName="icon-magic-stick" color="#ccc"></svg-icon>
        </el-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(theme,index) in themeList" :key="index" :disabled="activeThemeName === theme.name" @click="(e:MouseEvent) => {handleChangeTheme(e,theme.name)}">
          <span>{{theme.title}}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">

</style>