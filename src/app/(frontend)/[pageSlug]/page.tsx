//Uansett hvilken url jeg lager i admin for en ny side,
//vil denne functionen hente inn den riktige slik at hver side
//får riktig url.

//Denne filen kjører når noen skriver inn en url som matcher [pageSlug]

import { getPayload } from 'payload'
import config from '@payload-config'
import RenderBlocks from '@/blocks/RenderBlocks/RenderBlocks'

type PageParams = {
  params: Promise<{ pageSlug: string }>
}

export default async function Page({ params }: PageParams) {
  const { pageSlug } = await params
  const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: pageSlug,
      },
    },
  })

  const page = queryResults.docs[0]

  return (
    <article>
      <h1>{page.title}</h1>
      <RenderBlocks blocks={page.blocks} />
    </article>
  )
}
