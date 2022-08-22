<template>
  <!-- 由于vue是单向数据流，不能修改父组件的值，所以需要用element提供的:model-value设置dialogVisible -->
  <el-dialog :model-value="dialogVisible"
             title="Tips"
             width="30%"
             :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>
