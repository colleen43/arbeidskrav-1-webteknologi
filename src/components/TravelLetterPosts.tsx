import Image from 'next/image'

type BlogPost = {
  currentPost: {
    photo: {
      alt: string
      sizes: {
        widescreen: {
          url: string
          width: number
          height: number
        }
      }
    }
  }
}

export default function TravelLetterPost({ currentPost }: BlogPost) {
  console.log('Current Post', currentPost)
  return (
    <main>
      <article>
        <Image
          src={currentPost.photo.sizes.widescreen.url}
          width={currentPost.photo.sizes.widescreen.width}
          height={currentPost.photo.sizes.widescreen.height}
          alt={currentPost.photo.alt}
        />
      </article>
    </main>
  )
}
