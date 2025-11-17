export const SurfCoursesBlock = {
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
