# Payload Blank Template

This template comes configured with the bare minimum to get started on anything you need.

## Quick start

This template can be deployed directly from our Cloud hosting and it will setup MongoDB and cloud S3 object storage for media.

## Quick Start - local setup

To spin up this template locally, follow these steps:

### Clone

After you click the `Deploy` button above, you'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URI` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

#### Docker (Optional)

If you prefer to use Docker for local development instead of a local MongoDB instance, the provided docker-compose.yml file can be used.

To do so, follow these steps:

- Modify the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
- Modify the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
- Run `docker-compose up` to start the database, optionally pass `-d` to run in the background.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).

## Explanations of my code

1. Lærte å lage flere media collections så de kan høre til riktig collection. Prøver å skjønne hvorfor typescript klager når jeg prøver å lage "relationTo" fra SurfCourses.ts til CourseImages.ts, når det ikke var et problem før. 

Svar: Jeg hadde glemt å endre "media" i TravelLetters.ts til "travel-letter-images". Den skulle altså høre til TravelLetterImages.ts. 

Når jeg fikset dette, hadde jeg fortsatt typescript problemet, men kjørte "npm run generate: types", som fikset problemet!

2. "Is course_images table created or renamed from another table?
❯ + course_images         create table
  ~ media › course_images rename table". 
  
  Dette skjedde i terminalen etter at jeg endret Media.ts til CourseImages.ts, fordi at denne innholdsamlingen har bilder i den fra før. Da valgte jeg <~ media › course_images rename table> for å kunne beholde bildene.

  Jeg måtte svare på flere tilsvarende spørsmål og det gikk bra til slutt. Vurderer at neste er det kanskje lurere å bare slette "Media.ts" og lage en ny fil hvis jeg vil at det skal hete noe annet, og gjør det fra starten av i tillegg, slik at jeg slipper så mye styr. 

3. Får 404 når jeg prøver å JSON.stringify queryResults på HomePage, plutselig er det 404 på alle sider uansett hva! Skjønner ingenting. 

Svar: Jeg måtte svare på noen spørsmål in terminalen som jeg ikke så før nå.

4. Jeg får en 404 når jeg kjører npm run dev.
    - Løsningen: Hadde satte root page.tsx in en mappe, så "http://localhost:3000" fant ikke frem.

5. I admin panelet, får jeg plutselig opp problemet at når jeg trykker inn på et enkelt komponent i en collection, får jeg opp bare en blank side. Det står i consolen: failed to load resource: the server responded with a status of 404 (Not Found).
     - Sjekk hvilken url jeg får når jeg trykker på et enkelt artikkel.
     Oppdatering: Plutselig får jeg 404 bare jeg prøver å komme inn på nettsiden. (http://localhost:3000)
        - Det står ingen problemer i terminalen, in consollen står det 
               "Failed to load resource: the server responded with a status of 404 (Not Found)"

    Løsningen: Hadde feil url path fordi at root page.tsx satt jeg i en mappe. Tok den ut av mappa.            

6. Når jeg prøver å komme til http://localhost:3000/admin, får jeg opp dette i terminalen hver gang:
         "Is course_images_id column in payload_locked_documents_rels table created or renamed from another column?
            ❯ + course_images_id            create column
             ~ media_id › course_images_id rename column GET / 404 in 45ms".
        - Så velger jeg den nederste.
        - Så får jeg denne: 
          "Is travel_letter_images_id column in payload_locked_documents_rels table created or renamed from another column?
          ❯ + travel_letter_images_id create column"
       - Så velger jeg den.
       - At jeg får opp de samme spørsmålene om og om igjen har visst med SQlite å gjøre, fordi de blir visst ikke lagret.
       - Da kommer jeg til admin panelet, men får dette in consollen:
       "[Error] Failed to load resource: the server responded with a status of 404 (Not Found) (chunk-AZDI6MW4.js.map, line 0)"

       Løsningen: Måtte faktisk lage nytt prosjekt, da jeg ikke fant ut av dette. 

7. Får feilmeldingen i likhet med 1., men får flere errorer når jeg prøver å kjøre "npm run generate:types"

    - Lukket og åpnet payload prosjektet igjen, kjørte "npm run generate:types" en gang til, og da fungerte alt sammen.

8. Når jeg er i admin panelet, trykker jeg inn på en innholdssamling "Surf Coursees" og prøver å opprette en ny element in "Surf Courses", får jeg denne feilmelding i Next i browseren: "getFromImportMap: PayloadComponent not found in importMap {key: "@payloadcms/richtext-lexical/rsc#RscEntryLexicalField"PayloadComponent: "@payloadcms/richtext-lexical/rsc#RscEntryLexicalField"schemaPath: "@payloadcms/richtext-lexical/rsc#RscEntryLexicalField"} "You may need to run the `payload generate:importmap` command to generate the importMap ahead of runtime." 
    - Denne kommer kun ifm innholdssamlingen "Surf Courses".
    - Jeg måtte kjøre `npm generate:importmap`, og da forsvant problemet!

9. Begynner å få en bedre forståelse på forskjellen mellom blokker og innholdssamlinger. 
      - Innholdssamlinger kan brukes når de har dokumenter som skal gjenbrukes, fordi de ligger mer tilgjengelig i databasen.  
      - Blokker fungerer bedre for layout og struktur.

10. Lærte: Blokker og innholdsamlinger kan brukes på samme side. Man kan bruke blokker og "relationTo:" for at brukeren kan velge deler av valgt innholdsamling i blokken. 
    - I dette prosjektet skal jeg vise "SurfCourses.ts" og "TravelLetters.ts" uten en blokk som ramme, siden 
    det er meningen å vise alle kursene og reisebrev.

11. Lærer: Å forstå hvordan innholdssamling for undersider fungerer.

12. Error: "'const' declarations must be initialized."
      - Fikk dette på "admin" og "fields" mens jeg prøvde å lage innholdssamlingen for undersider. 

      Løst: Hadde et par ekstra curly brackets. 
      
    
