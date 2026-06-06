import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Technique from '../pages/Technique.vue'
import Suivi from '../pages/Suivi.vue'
import Integration from '../pages/Integration.vue'
import TracePage from '../components/TracePage.vue'
import { getEntry, getSection, sections } from '../data/sectionConfig'


const sectionKeys = Object.keys(sections)

function buildSectionRoutes(sectionKey) {
  const section = getSection(sectionKey)
  return section.tabs.map((tab) => ({
    path: `/${sectionKey}/${tab.slug}`,
    name: `${sectionKey}-${tab.slug}`,
    component: TracePage,
    props: {
      section,
      entry: getEntry(sectionKey, tab.slug)
    }
  }))
}

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/technique',
    name: 'Technique',
    component: Technique,
    props: { section: getSection('technique') }
  },
  {
    path: '/suivi',
    name: 'Suivi',
    component: Suivi,
    props: { section: getSection('suivi') }
  },
  {
    path: '/integration',
    name: 'Integration',
    component: Integration,
    props: { section: getSection('integration') }
  },
  
  { path: '/:pathMatch(.*)*', redirect: '/' },
  ...sectionKeys.flatMap(buildSectionRoutes)
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
