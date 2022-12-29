<template>
  <div ref="charts" class="charts" />
</template>

<script>
import echarts from 'echarts'
export default {
  name: '',
  mounted() {
    const lineCharts = echarts.init(this.$refs.charts)
    lineCharts.setOption({

    })
  }
}
</script>

<style>
.charts{
  height: 100%;
  width: 100%;
}
</style>
