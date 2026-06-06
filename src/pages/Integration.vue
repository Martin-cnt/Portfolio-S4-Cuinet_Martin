<template>
  <SectionPage :section="section" active-slug="trace-1" />
</template>

<script>
import SectionPage from '../components/SectionPage.vue'

export default {
  name: 'Integration',
  components: { SectionPage },
  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>
