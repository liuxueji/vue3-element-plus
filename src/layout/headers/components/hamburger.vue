<template>
  <div class="hamburger-container"
       @click="toggleClick"
       id="hamburger">
    <svg-icon :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

// 触发mutations中的changeSiderType方法，改变siderType状态
const toggleClick = () => {
  store.commit('app/changeSiderType')
}

// 动态设置图标的样式
const icon = computed(() => {
  return store.getters.siderType ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
  .hamburger-container {
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
