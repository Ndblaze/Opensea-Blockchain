import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '6b0ntond',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skujuu43gnl33QbWq1WofMEaLbITCYMz2YennyTBBeRLdtg5MIJ1KRBOPkssIpVrSrC3fuG4aYqMjkwQzTvyD6HIZZoQ7taM5o9BwdO3JCAmx2puOAkHZWMR4ZYgGUO2WABoxnhM6IC0blp4kcScSZtQvKvdi1CvEcznOzGgGr1MWaYOw9f0',
  useCdn: false,
})