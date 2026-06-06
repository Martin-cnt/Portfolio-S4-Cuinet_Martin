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
        :class="{ active: tab.slug === activeSlug }"
      >
        {{ tab.label }}
      </router-link>
    </div>

    <div class="section-panel card">
      <div class="section-panel__badge">{{ activeTab.label }}</div>
      <h2>{{ activeTab.title }}</h2>
      <p>
        Sous-page dédiée à {{ activeTab.title.toLowerCase() }}. Tu peux y placer ton texte, ton image,
        ta légende et ton analyse, dans un container large et simple.
      </p>

      <div class="section-panel__grid">
        <article class="mini-card">
          <strong>Contenu</strong>
          <span>Trace numérotée, titrée et légendée.</span>
        </article>
        <article class="mini-card">
          <strong>Analyse</strong>
          <span>Explication du contexte, des choix et du bilan.</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionPage',
  props: {
    section: {
      type: Object,
      required: true
    },
    activeSlug: {
      type: String,
      default: 'trace-1'
    }
  },
  computed: {
    activeTab() {
      return this.section.tabs.find((tab) => tab.slug === this.activeSlug) ?? this.section.tabs[0]
    }
  },
  methods: {
    tabPath(slug) {
      return `/${this.section.key}/${slug}`
    }
  }
}
</script>
