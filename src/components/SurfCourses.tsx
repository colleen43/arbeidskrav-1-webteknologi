import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Course = {
  title: string
  id: number
  level: string
  price: number
  highlights: SerializedEditorState<SerializedLexicalNode>
}

type SurfCoursesProps = {
  courses: Course[]
}

export default function SurfCourses({ courses }: SurfCoursesProps) {
  console.log(courses)
  return (
    <main>
      {courses.map((course) => {
        console.log('Highlights', course.highlights)
        return (
          <article key={course.id}>
            <h2>{course.title}</h2>
            <h3>{course.level}</h3>
            <h3>Price: ${course.price}</h3>
            <div className="rich-text-content">
              <RichText data={course.highlights} />
            </div>
          </article>
        )
      })}
    </main>
  )
}
