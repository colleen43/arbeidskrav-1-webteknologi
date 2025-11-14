//Lurt å gjøre: Bruk samme "name" i blokken som man bruker for å navne
//propsene på komponenten for å sikre at vi ikke blander hva som
//er hva mellom de to.

import { Block } from 'payload'

export const HeroBannerBlock: Block = {
  slug: 'HeroBannerBlock',
  interfaceName: 'HeroBannerBlock', //Brukes av Typescript til å lage typen til blokken.
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false, //kun for at man skal huske
    },
    {
      name: 'backgroundImage',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
  ],
}
