import { getPayload } from 'payload'
import config from '@payload-config'
import TravelLetterPost from '@/components/TravelLetterPosts'
import TravelLetters from '@/components/TravelLetters'

type PageParams = {
  params: Promise<{ travelLetterPostsSlug: string }>
}

export default async function Page({ params }: PageParams) {
  const { travelLetterPostsSlug } = await params
  const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'travel-letter-posts',
    where: {
      slug: {
        equals: travelLetterPostsSlug,
      },
    },
    depth: 2,
  })

  const post = queryResults.docs[0]

  return (
    <article>
      <TravelLetterPost currentPost={post} />
    </article>
  )
}
