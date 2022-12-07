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
      component: () => import('@/views/my-learning/learning-views/MyDashboard'),
      name: 'MyDashboard',
      meta: { title: 'MyDashboard' }
    },
    {
      path: 'HTML',
      component: () => import('@/views/my-learning/learning-views/HTML'),
      name: 'HTML',
      meta: { title: 'HTML' }
    },
    {
      path: 'FreeList',
      component: () => import('@/views/my-learning/learning-views/FreeList'),
      name: 'FreeList',
      meta: { title: 'FreeList' }
    }
  ]
}

export default MyLearningRouter
