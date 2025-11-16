import { getPayload } from 'payload'
import config from '@payload-config'
import HeroBanner from '@/components/HeroBanner/HeroBanner'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'surf-courses',
  })

  return <main></main>
}
