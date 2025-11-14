//Kurs innlegg på admin panelet er produsert av chatGPT

import type { CollectionConfig } from 'payload'

export const SurfCourses: CollectionConfig = {
  slug: 'surf-courses',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      type: 'text',
      name: 'slug',
      required: true,
      unique: true,
      admin: {
        description: 'Url-friendly version of title, must be unique.',
      },
    },
    {
      type: 'text',
      name: 'level',
      label: 'Level of expertise',
    },
    {
      type: 'number',
      name: 'price',
      label: 'Price of the course',
      required: true,
    },
    {
      type: 'number',
      name: 'available spots',
      required: true,
    },
    {
      type: 'richText',
      name: 'highlights',
      label: 'Highlights that participants can look forward too',
      required: true,
    },
    {
      type: 'relationship',
      name: 'photo',
      relationTo: 'course-images',
      required: true,
    },
  ],
}
