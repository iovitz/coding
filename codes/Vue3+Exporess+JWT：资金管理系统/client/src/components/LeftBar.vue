<template>
  <aside class="left-bar">
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span>首页</span>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <i class="el-icon-location"></i>
          <span>资金管理</span>
        </template>
        <el-menu-item index="foundlist">
          <i class="el-icon-setting"></i>
          <span>资金管理</span>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          <i class="el-icon-location"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item index="/user">
          <i class="el-icon-setting"></i>
          <span>个人信息</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </aside>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.left-bar {
  width: 270px;
  height: 100%;
  border-right: 1px solid #dedede;
  .el-menu {
    border-right: none;
  }
}
</style>
