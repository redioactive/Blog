<script setup lang="ts">
import {isExternal} from '@/utils/validate'
interface Props {
  to:string
}

const props = defineProps<Props>();

</script>

<template>
  <a :href="props.to" v-if="isExternal(props.to)" v-bind="$attrs" target="_blank" rel="noopener">
    <slot/>
  </a>
  <router-link v-else :to="props.to" v-bind="$attrs">
    <slot/>
  </router-link>
</template>

<style scoped lang="scss">

</style>