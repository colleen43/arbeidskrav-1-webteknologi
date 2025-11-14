import { Media } from '@/payload-types'

type HeroBannerProps = {
  title: string
  subtitle?: string | undefined | null //legger til undefined og null fordi at "subtitle" er valgfri.
  backgroundImage?: Media | number | null
}

export default function HeroBanner({ title, subtitle, backgroundImage }: HeroBannerProps) {
  return (
    <hgroup className="flex justify-center items-center flex-col p-20">
      <h1 className="text-4xl m-4 text-center">{title}</h1>
      {subtitle && <h2 className="text-2xl m-4 text-center">{subtitle}</h2>}
    </hgroup>
  )
}
