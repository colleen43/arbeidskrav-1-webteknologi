import { HeroBannerBlock } from '@/blocks/HeroBannerBlock'
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
    {
      name: 'slug',
      label: 'Side-url',
      type: 'text',
      unique: true,
      admin: {
        description: 'Hvilken sider-URL skal siden vidses på? Den må være unik.',
      },
    },
    {
      name: 'blocks',
      label: 'Sideblokker',
      type: 'blocks',
      blocks: [HeroBannerBlock],
    },
    {
      name: 'featuredCourses',
      type: 'relationship',
      relationTo: 'surf-courses',
      hasMany: true,
    },
  ],
}
