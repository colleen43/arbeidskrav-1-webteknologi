//Reisebrev innlegg på admin panelet er produsert av chatGPT

import type { CollectionConfig } from 'payload'

export const TravelLetters: CollectionConfig = {
  slug: 'travel-letters',
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
      type: 'relationship',
      name: 'photo',
      relationTo: 'travel-letter-images',
      required: true,
    },
    {
      type: 'date',
      name: 'date',
      label: 'Date letter was written',
      required: true,
    },
    {
      type: 'text',
      name: 'introduction',
      label: 'Short description of travel letter topic',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'url',
      unique: true,
      admin: {
        description: 'What url should this blog post be shown through?',
      },
    },
  ],
}
