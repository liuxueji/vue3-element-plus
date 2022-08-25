<template>
  <!-- 侧边栏1 -->
  <el-aside class="aside1"
            width="100px">
    <div class="aside1_top">
      <!-- <img src="@/assets/logo.png" alt="" /> -->
    </div>
    <div class="aside1_menu">
      <el-menu default-active="1"
               class="el-menu-vertical aside1_menu">
        <el-menu-item v-for="(item,index) in menusList"
                      :key="item.id"
                      :index="'/'+item.path">
          <el-icon class="aside1_icon">
            <!-- 通过动态组件获取图标 -->
            <component :is="iconList[index]"></component>
          </el-icon>
          <span>{{item.authName}}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </el-aside>
</template>

<script setup>
// 调用请求menu数据方法
import { menuList } from '@/api/menu'
import { ref } from 'vue'
// import variables from '@/styles/variables.scss'

// 导入需要的图标
const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
// const icon = ref('menu')

// 默认激活的path，如果本地存储了就用本地的，否则为 '/users'
// const defaultActive = ref(sessionStorage.getItem('path') || '/users')
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
// const savePath = (path) => {
//   sessionStorage.setItem('path', `/${path}`)
// }
</script>

<style lang="scss" scoped>
  /* 菜单栏 */
  .el-menu {
    width: 100%;
    border-right: none !important;
    /* background-color: rgb(250, 250, 250) !important; */
  }

  .el-menu {
    width: 100% !important;
  }
  .el-aside .aside1 {
    background-color: rgb(250, 250, 250);
    height: 100%;
  }
  /* 侧边栏1开始 */
  .aside1_menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(250, 250, 250) !important;
  }

  .aside1_menu > .el-menu-item {
    height: 80px;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(250, 250, 250);
  }

  .el-menu > .el-menu-item span {
    line-height: 20px;
  }

  .aside1_menu .el-menu-item.is-active {
    color: #fff;
    border-radius: 5px;
    background-color: #1890ff !important;
  }

  .aside1_icon {
    margin-left: 5px;
    font-size: 25px;
    margin-bottom: 10px;
  }

  .aside1 {
    position: relative;
    width: 100px;
    background-color: rgb(250, 250, 250);
  }

  .aside1_top {
    margin: 19px auto 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    overflow: hidden;
    background-color: rgb(235, 194, 221);
  }

  .aside1_top img {
    width: 100%;
  }

  .aside1_menu {
    margin-top: 30px;
  }
  /* 侧边栏1结束 */
</style>
