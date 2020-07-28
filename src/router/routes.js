import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue'

export default [
  {
    path: '/',
    component: KbnBoardView,
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    component: KbnLoginView
  },
  {
    path: '/',
    component: KbnTaskDetailModal,
    meta: {requiresAuth: true}
  },
  {
    path: '*',
    redirect: '/'
  }
]
