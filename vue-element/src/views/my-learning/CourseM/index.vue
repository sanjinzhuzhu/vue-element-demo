<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="margin:20px" />

    <el-table :data="tableData" border="true" style="width:100%">
      <el-table-column prop="prop" label="序号" width="80px" align="center" />
      <el-table-column prop="name" label="课程类型" width="width" />
      <el-table-column prop="address" label="图标" width="width" />
      <el-table-column prop="address" label="操作" width="width" />
    </el-table>

    <el-pagination
      style="textAlign:center"
      layout="prev, pager, next,jumper,sizes,total"
      :total="99"
      :current-page="5"
      :page-size="5"
      :pager-count="7"
      :page-sizes="[3,5,10]"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
