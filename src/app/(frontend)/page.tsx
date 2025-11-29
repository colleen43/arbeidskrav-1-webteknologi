import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/home')
}

export function TravelLetterPostsRootPage() {
  redirect('/travelletterposts/1')
}
