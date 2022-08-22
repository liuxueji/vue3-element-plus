<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList"
                        :key="index">
      <!-- 设置面包屑最后一项可以点击 -->
      <span class="no-redirect"
            v-if="index === breadcrumbList.length - 1">{{
        $t(`menus.${item.name}`)
        }}</span>
      <!-- 设置面包屑不是最后一项，可以点击，并且可以跳转至对于路由 -->
      <span class="redirect"
            v-else
            @click="handleRedirect(item.path)">{{
        $t(`menus.${item.name}`)
        }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

// 接收路由表
const breadcrumbList = ref([])

// 定义获取路由表方法，将路由表赋值给变量
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
  // 获取完整路由信息
  console.log(route.matched)
}

// 面包屑跳转事件，注意要定义到watch上面！否则容易出错
const handleRedirect = (path) => {
  router.push(path)
}

// 监听路由变化，route更新时，调用获取路由表方法
watch(
  route,
  () => {
    initBreadcrumbList()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      color: $menuBg;
    }
  }
</style>
