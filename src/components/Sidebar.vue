<template>
  <nav class="side">
    <div class="nav-links">
      <router-link to="/" class="link" :class="{ active: isHomeActive }"> <span class="dot"/> Accueil</router-link>
      <router-link to="/technique" class="link" :class="{ active: isSectionActive('technique') }"> <span class="dot"/> Technique</router-link>
      <router-link to="/suivi" class="link" :class="{ active: isSectionActive('suivi') }"> <span class="dot"/> Suivi de projet</router-link>
      <router-link to="/integration" class="link" :class="{ active: isSectionActive('integration') }"> <span class="dot"/> Intégration</router-link>
    </div>

  </nav>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Sidebar',
  setup() {
    const route = useRoute()

    const isHomeActive = computed(() => route.path === '/')
    const isSectionActive = (sectionKey) =>
      route.path === `/${sectionKey}` || route.path.startsWith(`/${sectionKey}/`)

    return {
      isHomeActive,
      isSectionActive
    }
  }
}
</script>
