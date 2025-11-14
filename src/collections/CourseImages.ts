//Bilder innhentet fra unsplash

import type { CollectionConfig } from 'payload'

export const CourseImages: CollectionConfig = {
  slug: 'course-images',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
