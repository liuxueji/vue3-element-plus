<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="7">
        <el-input clearable
                  v-model="queryForm.query"></el-input>
      </el-col>
      <el-button type="primary"
                 :icon="Search">搜索</el-button>
      <el-button type="primary"
                 @click="handleDialogValue">添加用户</el-button>
    </el-row>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column :prop="item.prop"
                       :label="item.label"
                       v-for="(item,index) in options"
                       :key="index">
        <template v-slot="{row}"
                  v-if="item.prop === 'mg_state'">
          <el-switch v-model="row.msg_state"
                     @change=changeState(row)></el-switch>
        </template>
        <template v-slot="{row}"
                  v-else-if="item.prop === 'create_time'">
          <!-- 调用全局属性 -->
          {{$filters.filterTimes(row.create_time)}}
        </template>
        <template #default
                  v-else-if="item.prop === 'action'">
          <el-button type="primary"
                     :icon="Edit"
                     circle />
          <el-button type="success"
                     :icon="Check"
                     circle />
          <el-button type="info"
                     :icon="Message"
                     circle />
        </template>
      </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
      <div class="demonstration">All combined</div>
      <el-pagination v-model:currentPage="queryForm.pagenum"
                     v-model:page-size="queryForm.pagesize"
                     :page-sizes="[100, 200, 300, 400]"
                     :small="small"
                     :disabled="disabled"
                     :background="background"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange" />
    </div>
  </el-card>
  <!-- 使用dialog，绑定dialogVisible -->
  <Dialog v-model="dialogVisible" />
</template>

<script setup>
import { Search, Edit, Check, Message } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { getUser, changeUserState } from '@/api/users'
import { options } from './options'
import { ElMessage } from 'element-plus'
import Dialog from './components/dialog.vue'
const total = ref(0)

const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 2
})

const tableData = ref([

  {
    id: 500,
    role_name: '超级管理员',
    username: 'admin',
    create_time: 1486720211,
    mobile: '12345678',
    email: 'adsfad@qq.com',
    mg_state: true
  }

])

const dialogVisible = ref(false)

const initGetUsersList = async () => {
  const res = await getUser(queryForm.value)
  tableData.value = res.users
  total.value = res.total
  console.log(tableData.value)
}

initGetUsersList()

const handleSizeChange = (pageSize) => {
  queryForm.value.pagenum = 1
  queryForm.value.pagesize = pageSize
  initGetUsersList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.pagenum = pageNum
  initGetUsersList()
}

const changeState = async (info) => {
  await changeUserState(info.id, info.mg_state)
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success'
  })
}

const handleDialogValue = () => {
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped></style>
