import { getPayload } from 'payload'
import config from '@payload-config'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const queryResults = await payload.find({
    collection: 'surf-courses',
  })

  return (
    <main>
      <pre>{JSON.stringify(queryResults, null, 2)}</pre>
    </main>
  )
}
