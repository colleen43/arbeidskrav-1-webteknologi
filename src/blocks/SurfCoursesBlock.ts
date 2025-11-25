import { Block } from 'payload'

export const SurfCoursesBlock: Block = {
  slug: 'SurfCoursesBlock', // blir blockType når blokken lagres i Pages.ts
  interfaceName: 'SurfCoursesBlock',
  fields: [
    {
      name: 'courses',
      type: 'relationship',
      relationTo: 'surf-courses',
      hasMany: true,
    },
  ],
}
