<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="margin:20px" />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="no" width="50px" label="序号" />
      <el-table-column prop="type" label="课程类型" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="icon" label="图标" />
      <el-table-column prop="edit" label="编辑" />

    </el-table>
    <!-- <el-pagination
      style="textAlign:center"
      layout="prev, pager, next,jumper,sizes,total"
    /> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      axios.get('/course-data').then(({ data }) => {
        this.tableData = data
      })
    }
  }

}
</script>

<style scoped>

</style>

