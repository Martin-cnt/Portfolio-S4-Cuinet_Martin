<template>
  <section class="page">
    <h1>Technique</h1>
    <p>Courte description et accès aux sous-pages de traces et bilans.</p>

    <div class="subnav">
      <router-link to="#trace1">Trace 1</router-link>
      <router-link to="#trace2">Trace 2</router-link>
      <router-link to="#bilan">Bilan</router-link>
    </div>

    <article id="trace1" class="trace">
      <h2>Trace 1</h2>
      <p>Trace numérotée, titrée et légendée.</p>
    </article>

    <article id="bilan" class="bilan">
      <h2>Bilan</h2>
      <p>Analyse et évaluation des savoir-faire.</p>
    </article>
  </section>
</template>

<script>
export default { name: 'Technique' }
</script>
