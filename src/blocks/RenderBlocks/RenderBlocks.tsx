import { HeroBannerBlock } from '@/payload-types'
import HeroBanner from '@/components/HeroBanner/HeroBanner'

type CustomBlock = HeroBannerBlock

type RenderBlocksProps = {
  blocks: CustomBlock[] | null | undefined
}

export default function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || !Array.isArray(blocks) || blocks.length < 1) return null

  return blocks.map((block) => {
    switch (block.blockType) {
      case 'HeroBannerBlock': {
        ;<HeroBanner
          key={block.id}
          title={block.title}
          subtitle={block.subtitle}
          backgroundImage={}
        />
      }

      default: {
        return null
      }
    }
  })
}
