import Layout from '@/layout'

const MyLearningRouter = {
  path: '/my-learning/index',
  component: Layout,
  redirect: 'noRedirect',
  name: 'MyLearning',
  meta: { title: 'MyLearning', icon: 'dashboard', affix: true },

  children: [
    {
      path: 'MyDashboard',
      component: () => import('@/views/my-learning/MyDashboard'),
      name: 'MyDashboard',
      meta: { title: 'MyDashboard' }
    },
    {
      path: 'CourseM',
      component: () => import('@/views/my-learning/CourseM'),
      name: 'CourseM',
      meta: { title: 'CourseM' }
    },
    {
      path: 'FreeList',
      component: () => import('@/views/my-learning/FreeList'),
      name: 'FreeList',
      meta: { title: 'FreeList' }
    }
  ]
}

export default MyLearningRouter
