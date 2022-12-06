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

    <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name">
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu v-for="item in hasChildren" :key="item.label" style="margin-right:20px;" index="item.label">
      <template slot="title">
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
      </el-menu-item>
    </el-submenu>
    <!--
    <el-submenu style="margin-right:20px" index="3">
      <template slot="title">HTML</template>
      <el-menu-item index="3-1">list</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu> -->

    <!-- <el-submenu style="margin-right:20px" index="4">
      <template slot="title">CSS</template>
      <el-menu-item index="4-1">基础知识</el-menu-item>
      <el-menu-item index="4-2">面试题目</el-menu-item>
      <el-menu-item index="4-3">思维导图</el-menu-item>
    </el-submenu> -->

  </el-menu>

</template>

<script>

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menuData: [
        {
          path: '/',
          name: 'MyDashboard',
          label: 'MyDashboard',
          url: 'MyDashboard/MyDashboard'
        },
        {
          label: 'HTML',
          children: [
            {
              path: '/基础知识',
              name: '基础知识',
              label: '基础知识',
              url: 'MHTML/基础知识'
            },
            {
              path: '/面试题目',
              name: '面试题目',
              label: '面试题目',
              url: 'MHTML/面试题目'
            },
            {
              path: '/思维导图',
              name: '思维导图',
              label: '思维导图',
              url: 'MHTML/思维导图'
            }
          ]
        }

      ]
    }
  },
  computed: {
    // 没有子菜单
    noChildren() {
      return this.menuData.filter(item => !item.children)
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter(item => item.children)
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

