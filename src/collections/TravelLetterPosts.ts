import type { CollectionConfig } from 'payload'

export const TravelLetterPosts: CollectionConfig = {
  slug: 'travel-letter-posts',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'relationship',
      name: 'photo',
      relationTo: 'travel-letter-images',
      required: true,
    },
    {
      name: 'blogContent',
      type: 'richText',
      label: 'Type your story here',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'blog-post-url',
      unique: true,
      required: true,
      admin: {
        description: 'IMPORTANT: Must be the same url as used on the introduction page',
      },
    },
  ],
}
