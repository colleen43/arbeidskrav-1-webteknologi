//Bilder innhentet fra unsplash

import type { CollectionConfig } from 'payload'

export const TravelLetterImages: CollectionConfig = {
  slug: 'travel-letter-images',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'article-photos', //dette blir mappenavnet (static-directory)
    mimeTypes: ['image/*'],
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'center',
      },
      {
        name: 'mobile',
        width: 680,
        height: undefined,
        position: 'center',
      },
      {
        name: 'widescreen',
        width: 1024,
        height: 768,
        position: 'center',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
