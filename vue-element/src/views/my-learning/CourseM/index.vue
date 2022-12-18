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

export default {
  data() {
    return {
      tableData: [
        {
          no: 1,
          type: 'haha',
          name: 'Mike',
          age: 12,
          icon: 'icon1',
          edit: 'edit1'
        },
        {
          no: 2,
          type: 'Chinese',
          name: 'Cindy',
          age: 13,
          icon: 'icon2',
          edit: 'edit2'
        },
        {
          no: 3,
          type: 'English',
          name: 'Jane',
          age: 14,
          icon: 'icon3',
          edit: 'edit3'

        },
        {
          no: 4,
          type: 'HTML',
          name: 'Nancy',
          age: 15,
          icon: 'icon1',
          edit: 'edit4'

        },
        {
          no: 5,
          type: 'CSS',
          name: 'Panda',
          age: 18,
          icon: 'icon1',
          edit: 'edit5'
        },
        {
          no: 6,
          type: 'Javascript',
          name: 'Candy',
          age: 16,
          icon: 'icon2',
          edit: 'edit6'
        },
        {
          no: 7,
          type: 'Vue',
          name: 'Jack',
          age: 28,
          icon: 'icon3',
          edit: 'edit7'
        },
        {
          no: 8,
          type: 'Webpack',
          name: 'Linda',
          age: 15,
          icon: 'icon4',
          edit: 'edit8'
        }
      ]
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      this.tableData
    }
  }

}
</script>

<style scoped>

</style>

