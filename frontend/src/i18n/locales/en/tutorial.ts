export default {
  tutorial: {
    title: 'Help Docs',
    description: 'API onboarding guides & FAQ',
    tabs: {
      guide: 'Setup Guide',
      faq: 'FAQ',
    },

    guide: {
      model: 'Model',
      client: 'Client',
      copy: 'Copy',
      copied: 'Copied',
      tabCurl: 'curl',
      tabPython: 'Python',
      tabSdk: 'OpenAI SDK',
      configNote: 'Tip: you can set ANTHROPIC_DEFAULT_HAIKU_MODEL to the matching *-flash model for cheaper background tasks; all four model fields may also point to the same model.',
    },

    faq: {
      searchPlaceholder: 'Search FAQ, e.g. 429',
      resultCount: '{count} questions',
      noResult: 'No matching questions',
    },
  },
}
