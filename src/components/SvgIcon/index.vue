<template>
  <svg class="svg-icon"
       aria-hidden="true">
    <!-- 外界传入的icon名，iconName为计算属性 -->
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
// 导入defineProps，computed
import { defineProps, computed } from 'vue'
// 接收父组件传入的icon
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})

// 利用计算属性，加工父组件传入的icon名，改造为 #icon-xxx 的调用方式
const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
