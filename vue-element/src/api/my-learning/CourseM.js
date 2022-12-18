import request from '@/utils/request'
export function getCourseData() {
  return request({
    url: 'http:/localhost:3000/getTableData',
    method: 'get'
  })
}

// import request from '@/utils/request'
// export function getCourseData(query) {
//   return request({
//     url: '/vue-element-admin/article/list',
//     method: 'get',
//     params: query
//   })
// }
