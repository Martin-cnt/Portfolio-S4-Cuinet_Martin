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

        <!-- BILAN -->
        <BilanPage v-if="entry.bilan" :bilan="entry.bilan" :skills="allSkills" />

        <!-- TRACE NORMALE -->
        <template v-else>
          <div class="skills-row" v-if="entry.skills">
            <strong>Savoir-faire élémentaires : </strong>
            <span
              v-for="skill in entry.skills"
              :key="skill.label"
              class="skill-badge"
              :style="{ background: skill.color + '22', color: skill.color, border: '1px solid ' + skill.color + '44' }"
            >
              {{ skill.label }}
            </span>
          </div>

          <div class="trace-content">
            <div class="trace-image" v-if="entry.image">
              <img :src="entry.image" :alt="entry.title" class="trace-img" @click="openImage(entry.image)">
              <p class="trace-legend" v-if="entry.legend">{{ entry.legend }}</p>
            </div>
            <div class="trace-image" v-if="entry.image2">
              <img :src="entry.image2" :alt="entry.title" class="trace-img" @click="openImage(entry.image2)">
              <p class="trace-legend" v-if="entry.legend2">{{ entry.legend2 }}</p>
            </div>
          </div><br>

          <div class="trace-text">
            <p v-for="(para, i) in entry.content" :key="i" v-html="renderContent(para)"></p>
          </div>
        </template>

      </article>
      <div class="lightbox" v-if="lightboxSrc" @click="lightboxSrc = null">
        <img :src="lightboxSrc" alt="zoom">
      </div>
    </div>
  </section>
</template>

<script>
import BilanPage from './BilanPage.vue'

export default {
  name: 'TracePage',
  components: { BilanPage },
  props: {
    section: { type: Object, required: true },
    entry: { type: Object, required: true }
  },
  data() {
    return {
      lightboxSrc: null
    }
  },
  computed: {
    allSkills() {
      const seen = new Set()
      return this.section.tabs
        .filter(t => t.skills)
        .flatMap(t => t.skills)
        .filter(skill => {
          if (seen.has(skill.label)) return false
          seen.add(skill.label)
          return true
        })
    }
  },
  methods: {
    tabPath(slug) {
      return `/${this.section.key}/${slug}`
    },
    openImage(src) {
      this.lightboxSrc = src
    },
    renderContent(text) {
      let result = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      if (this.entry.skills) {
        this.entry.skills.forEach(skill => {
          const escaped = skill.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          const regex = new RegExp(escaped, 'gi')
          result = result.replace(regex, `<span class="skill-inline" style="color:${skill.color}; background:${skill.color}22; padding:2px 8px;">${skill.label}</span>`)
        })
      }
      return result
    }
  }
}
</script>