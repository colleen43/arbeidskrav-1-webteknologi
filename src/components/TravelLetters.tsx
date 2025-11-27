import Image from 'next/image'

type TravelLetter = {
  id: number
  title: string
  date: string
  introduction: string
  photo: {
    alt: string
    sizes: {
      thumbnail: {
        url: string
        width: number
        height: number
      }
    }
  }
}

type TravelLetters = {
  travelLetters: TravelLetter[]
}

export default function TravelLetters({ travelLetters }: TravelLetters) {
  console.log('Travel Letters', travelLetters)
  return (
    <main>
      {travelLetters.map((travelLetter) => {
        return (
          <article key={travelLetter.id}>
            <Image
              src={travelLetter.photo.sizes.thumbnail.url}
              width={travelLetter.photo.sizes.thumbnail.width}
              height={travelLetter.photo.sizes.thumbnail.height}
              alt={travelLetter.photo.alt}
            />
            <h2>{travelLetter.title}</h2>
            <p>{travelLetter.date.split('T')[0]}</p>
            <p>{travelLetter.introduction}</p>
          </article>
        )
      })}
    </main>
  )
}
