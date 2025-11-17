import { Block } from 'payload'

export const SurfCoursesBlock: Block = {
  slug: 'SurfCoursesBlock',
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
