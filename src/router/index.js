import { createRouter, createWebHashHistory } from 'vue-router'
import TracePage from '../components/TracePage.vue'
import { getEntry, getSection, sections } from '../data/sectionConfig'
import Home from '../pages/Home.vue'


const sectionKeys = Object.keys(sections)

function buildSectionRoutes(sectionKey) {
  const section = getSection(sectionKey)
  return section.tabs.map((tab) => ({
    path: `/${sectionKey}/${tab.slug}`,
    name: `${sectionKey}-${tab.slug}`,
    component: TracePage,
    props: (route) => ({
      section: getSection(sectionKey),
      entry: getEntry(sectionKey, tab.slug)
    })
  }))
}

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
  path: '/technique',
  redirect: '/technique/trace-1'
  },
  {
    path: '/suivi',
    redirect: '/suivi/trace-5'
  },
  {
    path: '/integration',
    redirect: '/integration/trace-8'
  },
  ...sectionKeys.flatMap(buildSectionRoutes),
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
