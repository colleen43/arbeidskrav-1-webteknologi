export default function TravelLetters({ travelLetters }) {
  console.log('Travel Letters', travelLetters)
  return (
    <main>
      {travelLetters.map((travelLetter) => {
        return (
          <article key={travelLetter.id}>
            <h2>{travelLetter.title}</h2>
            <p>{travelLetter.date.split('T')[0]}</p>
            <p>{travelLetter.introduction}</p>
          </article>
        )
      })}
    </main>
  )
}
