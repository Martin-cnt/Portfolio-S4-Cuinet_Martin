<template>
  <section class="section-page">
    <header class="section-hero card">
      <h1>{{ section.title }}</h1>
      <p>{{ section.intro }}</p>
    </header>

    <div class="tab-strip card">
      <router-link
        v-for="tab in section.tabs"
        :key="tab.slug"
        :to="tabPath(tab.slug)"
        class="tab-link"
        :class="{ active: tab.slug === entry.slug }"
      >
        {{ tab.label }}
      </router-link>
    </div>

    <div class="detail-layout">
      <article class="detail-main card">
        <div class="detail-kicker">{{ entry.label }}</div>
        <h2>{{ entry.title }}</h2>
        <p>
          Espace de sous-page simple et grand format pour la trace ou le bilan. Tu peux y mettre ton texte,
          une image, une légende, et l’analyse du savoir-faire.
        </p>

        <div class="mini-card" style="margin-top:18px">
          <strong>Zone de contenu</strong>
          <span>Ajoute ici le détail de la trace, le visuel principal et ton explication.</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TracePage',
  props: {
    section: {
      type: Object,
      required: true
    },
    entry: {
      type: Object,
      required: true
    }
  },
  methods: {
    tabPath(slug) {
      return `/${this.section.key}/${slug}`
    }
  }
}
</script>
