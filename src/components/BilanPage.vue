<template>
  <div>
    <div v-for="bloc in bilan" :key="bloc.title" class="bilan-bloc card">
      <h3>{{ bloc.title }}</h3>
      <h4>Synthèse</h4>
      <p v-html="render(bloc.synthese)"></p>
      <div class="bilan-divider"></div>
      <h4>Évaluation</h4>
      <p v-html="render(bloc.evaluation)"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BilanPage',
  props: {
    bilan: { type: Array, required: true },
    skills: { type: Array, default: () => [] }
  },
  methods: {
    render(text) {
        let result = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        this.skills.forEach(skill => {
            const escaped = skill.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            result = result.replace(
            new RegExp(`(?<!skill-inline[^>]*)${escaped}(?![^<]*>)`, 'gi'),
            `<span class="skill-inline" style="color:${skill.color}; background:${skill.color}22;">${skill.label}</span>`
            )
        })
        return result
    },
  }
}
</script>