import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title', //Hvor ser vi dette?
  },
  fields: [
    {
      name: 'title',
      label: 'Sidetittel',
      type: 'text',
      required: true,
      admin: {
        description: 'Sidetittel, brukes som overskrift og i browseren.',
      },
    },
  ],
}
