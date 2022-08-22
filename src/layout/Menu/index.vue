<template>
  <el-menu active-text-color="#ffd04b"
           :background-color="variables.menuBg"
           class="el-menu-vertical-demo"
           :default-active="defaultActive"
           text-color="#fff"
           router
           unique-opened
           :collapse="!$store.getters.siderType">
    <el-sub-menu :index="item.id"
                 v-for="(item, index) in menusList"
                 :key="item.id">
      <template #title>
        <el-icon>
          <!-- 通过动态组件获取图标 -->
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <!-- 二级导航 -->
      <el-menu-item :index="'/' + it.path"
                    v-for="it in item.children"
                    :key="it.id"
                    @click="savePath(it.path)">
        <template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ $t(`menus.${it.path}`) }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
// 调用请求menu数据方法
import { menuList } from '@/api/menu'
import { ref } from 'vue'
import variables from '@/styles/variables.scss'

// 导入需要的图标
const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')

// 默认激活的path，如果本地存储了就用本地的，否则为 '/users'
const defaultActive = ref(sessionStorage.getItem('path') || '/users')
// 定义菜单栏数据
const menusList = ref([
  // {
  //   'id': 125,
  //   'authName': '用户管理',
  //   'path': 'users',
  //   'children': [
  //     {
  //       'id': 110,
  //       'authName': '用户列表',
  //       'path': 'users',
  //       'children': [],
  //       'order': null
  //     }
  //   ],
  //   'order': 1
  // },
  // {
  //   'id': 103,
  //   'authName': '权限管理',
  //   'path': 'rights',
  //   'children': [
  //     {
  //       'id': 111,
  //       'authName': '角色列表',
  //       'path': 'roles',
  //       'children': [],
  //       'order': null
  //     },
  //     {
  //       'id': 112,
  //       'authName': '权限列表',
  //       'path': 'rights',
  //       'children': [],
  //       'order': null
  //     }
  //   ],
  //   'order': 2
  // },
  // {
  //   'id': 101,
  //   'authName': '商品管理',
  //   'path': 'goods',
  //   'children': [
  //     {
  //       'id': 104,
  //       'authName': '商品列表',
  //       'path': 'goods',
  //       'children': [],
  //       'order': 1
  //     },
  //     {
  //       'id': 115,
  //       'authName': '分类参数',
  //       'path': 'params',
  //       'children': [],
  //       'order': 2
  //     },
  //     {
  //       'id': 121,
  //       'authName': '商品分类',
  //       'path': 'categories',
  //       'children': [],
  //       'order': 3
  //     }
  //   ],
  //   'order': 3
  // },
  // {
  //   'id': 102,
  //   'authName': '订单管理',
  //   'path': 'orders',
  //   'children': [
  //     {
  //       'id': 107,
  //       'authName': '订单列表',
  //       'path': 'orders',
  //       'children': [],
  //       'order': null
  //     }
  //   ],
  //   'order': 4
  // },
  // {
  //   'id': 145,
  //   'authName': '数据统计',
  //   'path': 'reports',
  //   'children': [
  //     {
  //       'id': 146,
  //       'authName': '数据报表',
  //       'path': 'reports',
  //       'children': [],
  //       'order': null
  //     }
  //   ],
  //   'order': 5
  // }
])
// 定义请求菜单栏数据方法
const initMenusList = async () => {
  // 请求接口数据，赋值给menusList
  menusList.value = await menuList()
}
// 执行方法
initMenusList()

// 定义方法存储path路径，当我们点击菜单栏即触发方法
const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style lang="scss" scoped></style>
