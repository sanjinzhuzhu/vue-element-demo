<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    margin-right="5px"
    @select="handleSelect"
  >

    <el-menu-item index="0"><img
      src="@/assets/menu-logo/cudedark.gif"
      alt=""
      style=" height: 46px;  text-align: center;
    margin:  6px -4px; float: left; min-width: 56px; border-radius: 10px solid,1px;"
    ></el-menu-item>

    <el-menu-item index="1">MyDashboard</el-menu-item>
    <el-submenu style="margin-right:20px" index="2">
      <template slot="title">WorkOrder</template>
      <el-menu-item index="2-1">list</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu style="margin-right:20px" index="3">
      <template slot="title">HTML</template>
      <el-menu-item index="3-1">list</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu>

    <el-submenu style="margin-right:20px" index="4">
      <template slot="title">CSS</template>
      <el-menu-item index="4-1">基础知识</el-menu-item>
      <el-menu-item index="4-2">面试题目</el-menu-item>
      <el-menu-item index="4-3">思维导图</el-menu-item>
    </el-submenu>

  </el-menu>

</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

</style>

