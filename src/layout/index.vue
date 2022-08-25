<template>
  <el-container class="app-wrapper">
    <menu-left />
    <menu-right />
    <el-container class="container"
                  :class="{ hidderContainer: !$store.getters.siderType }">
      <el-header>
        <Headers />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import menuLeft from './Menu/menuLeft'
import menuRight from './Menu/menuRight'
import Headers from './headers'
import { computed } from 'vue'
import variables from '@/styles/variables.scss'
import { useStore } from 'vuex'
const store = useStore()
// const asideWidth = ref(variables.sideBarWidth)

// 动态设置侧边栏的宽度
const asideWidth = computed(() => {
  return store.getters.siderType
    ? variables.sideBarWidth
    : variables.hideSideBarWidth
})
</script>

<style lang="scss" scoped>
  .app-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .container {
    width: calc(100% - $sideBarWidth);
    height: 100%;

    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    transition: all 0.28s;
    &.hidderContainer {
      width: calc(100% - $hideSideBarWidth);
    }
  }
  ::v-deep .el-header {
    padding: 0;
  }
</style>
