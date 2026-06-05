<template>
  <nav class="side">
    <div class="nav-links">
      <router-link to="/" class="link"> <span class="dot"/> Accueil</router-link>
      <router-link to="/technique" class="link"> <span class="dot"/> Technique</router-link>
      <router-link to="/suivi" class="link"> <span class="dot"/> Suivi de projet</router-link>
      <router-link to="/integration" class="link"> <span class="dot"/> Intégration</router-link>
    </div>

  </nav>
</template>

<script>
export default { name: 'Sidebar' }
</script>
