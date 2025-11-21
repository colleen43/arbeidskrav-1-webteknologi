//Hvilken api har SurfCourses.tsx tilgang til?

import { RichText } from '@payloadcms/richtext-lexical/react'

export default function SurfCourses({ courses }) {
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
            <RichText data={course.highlights} />
          </article>
        )
      })}
    </main>
  )
}
