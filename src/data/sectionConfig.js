export const sections = {
  technique: {
    key: 'technique',
    title: 'Présentation et évaluation de savoir-faire technique',
    intro: 'Cette partie présente les savoir-faire techniques travaillés pendant le stage.',
    tabs: [
      { slug: 'trace-1', label: 'Trace 1', title: 'API générique' },
      { slug: 'trace-2', label: 'Trace 2', title: 'API externes' },
      { slug: 'trace-3', label: 'Trace 3', title: 'Multi-support' },
      { slug: 'trace-4', label: 'Trace 4', title: 'Sécurité' },
      { slug: 'bilan', label: 'Bilan', title: 'Bilan & évaluation' }
    ]
  },
  suivi: {
    key: 'suivi',
    title: 'Suivi de projet',
    intro: 'Cette partie regroupe les traces liées à l’organisation et au pilotage du projet.',
    tabs: [
      { slug: 'trace-5', label: 'Trace 5', title: 'Planification' },
      { slug: 'trace-6', label: 'Trace 6', title: 'Suivi d’avancement' },
      { slug: 'trace-7', label: 'Trace 7', title: 'Communication' },
      { slug: 'bilan', label: 'Bilan', title: 'Bilan & analyse' }
    ]
  },
  integration: {
    key: 'integration',
    title: 'Intégration en entreprise',
    intro: 'Cette partie présente l’intégration dans l’entreprise et le retour d’expérience.',
    tabs: [
      { slug: 'trace-8', label: 'Trace 8', title: 'Découverte du cadre' },
      { slug: 'trace-9', label: 'Trace 9', title: 'Premiers livrables' },
      { slug: 'bilan', label: 'Bilan', title: 'Bilan intégration' }
    ]
  }
}

export function getSection(sectionKey) {
  return sections[sectionKey]
}

export function getEntry(sectionKey, slug) {
  const section = getSection(sectionKey)
  if (!section) return null

  const entry = section.tabs.find((tab) => tab.slug === slug)
  return entry ? { ...entry, sectionKey } : null
}
