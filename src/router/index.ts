import { createRouter, createWebHistory } from 'vue-router'
import FrameworksList from '../views/FrameworksList.vue'
import RolesList from '../views/RolesList.vue'
import CompetenciesList from '../views/CompetenciesList.vue'
import TKSList from '../views/TKSList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: FrameworksList
    },
    {
      path: '/:framework',
      component: RolesList
    },
    {
      path: '/:framework/:role',
      component: CompetenciesList
    },
    {
      path: '/:framework/:role/:competency',
      component: TKSList
    }
  ]
})

export default router