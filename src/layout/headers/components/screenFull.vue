<template>
  <div @click="handleFullScreen"
       id="screenFul">
    <svg-icon :icon="icon ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
  </div>
</template>

<script setup>
// 导入全屏插件
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeMount } from 'vue'

const icon = ref(screenfull.isFullscreen)

// 定义切换全屏方法
const handleFullScreen = () => {
  if (screenfull.isEnabled) {
    // toggle()切换全屏
    screenfull.toggle()
  }
}

const changeIcon = () => {
  icon.value = screenfull.isFullscreen
}

// 监听变化，改变全屏的图标
onMounted(() => {
  screenfull.on('change', changeIcon)
})

onBeforeMount(() => {
  screenfull.off('change')
})
</script>

<style lang="scss" scoped></style>
