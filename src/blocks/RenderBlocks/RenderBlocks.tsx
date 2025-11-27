import { HeroBannerBlock, SurfCoursesBlock, TravelLettersBlock } from '@/payload-types'
import HeroBanner from '@/components/HeroBanner/HeroBanner'
import SurfCourses from '@/components/SurfCourses'
import TravelLetters from '@/components/TravelLetters'

type CustomBlock = HeroBannerBlock | SurfCoursesBlock | TravelLettersBlock

type RenderBlocksProps = {
  blocks: CustomBlock[] | null | undefined
}

export default function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || !Array.isArray(blocks) || blocks.length < 1) return null

  return blocks.map((block) => {
    switch (
      block.blockType //blockType er slugen fra blokken
    ) {
      case 'HeroBannerBlock': {
        return <HeroBanner key={block.id} title={block.title} subtitle={block.subtitle} />
        //mottar data fra blokken som props og viser HTML på siden.
      }

      case 'SurfCoursesBlock': {
        return <SurfCourses key={block.id} courses={block.courses} />
      }

      case 'TravelLettersBlock': {
        return <TravelLetters key={block.id} travelLetters={block.travelLetters} />
      }

      default: {
        return null
      }
    }
  })
}
