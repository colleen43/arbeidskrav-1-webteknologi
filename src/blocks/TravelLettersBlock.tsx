import { Block } from 'payload'

export const TravelLettersBlock: Block = {
  slug: 'TravelLettersBlock', // blir "blockType" i api'et.
  interfaceName: 'TravelLettersBlock', //Brukes til å lage typen til blokken i Typescript.
  fields: [
    {
      name: 'travelLetters',
      type: 'relationship',
      relationTo: 'travel-letters',
      hasMany: true,
    },
  ],
}
