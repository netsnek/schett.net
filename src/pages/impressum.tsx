import {Field, PageConfig, PageProps, snekResourceId} from '@atsnek/jaen'

import { Container} from '@chakra-ui/react'
import {graphql} from 'gatsby'
import * as React from 'react'

const Page: React.FC<PageProps> = () => {
  return (
    <Container
      maxW={"4xl"}
      mt={{base: '10', md: '20'}}
      mb={{base: '10', md: '20'}}
      pt={{base: '5', md: '10'}}
      pb={{base: '5', md: '10'}}>
      <Field.Text
        name="Text"
        defaultValue="
      <h1>Florian Herbert Kleber IT</h1>
      Inhaber Florian Herbert Kleber<br/>
      <br/>
      Dreilach 16<br/>
      9184 St. Jakob i. R.<br/>
      Austria<br/>
      <br/>
      
      <br/>
      Tel.: +43-(0)650 824 88 11<br/>
      office@fhkit.at<br/>
      www.fhkit.at<br/>
      <br/>

      <br/>
      Handelsgericht Villach
      <br/>
      
        
      
      <br/>Sämtliche Texte auf der Website wurden sorgfältig geprüft. Dessen ungeachtet kann keine Garantie für Richtigkeit, Vollständigkeit und Aktualität der Angaben übernommen werden. Die Inhalte dieser Website dürfen weder ganz noch teilweise ohne vorherige Genehmigung des Urhebers zu kommerziellen Zwecken vervielfältigt und/oder in Informationssystemen, die zur Datenweitergabe genutzt werden, gespeichert werden.  Schadensersatzansprüche wegen direkter oder indirekter Schäden, die aus der Benutzung der WWW-Dokumente entstehen, können nicht gegen den WWW-Verantwortlichen oder den Autor geltend gemacht werden. Sofern in dem Dokument durch Hyperlinks auf kommerzielle Websites verwiesen wird, stellt dies keine Empfehlung dar. Diese Links sollen nur eine (unvollständige) Auswahl von Möglichkeiten aufzeigen. Ein Anspruch von nicht berücksichtigten Websites auf Aufnahme in das Dokument besteht deshalb nicht. Für Informationen, die über externe Querverweise (Hyperlinks) erreicht werden, wird keine Gewähr übernommen.<br/>
      
      <h2>Datenschutz</h2>
      <br/>Wir verpflichten uns, die Privatsphäre aller Personen zu schützen, die unsere Site nutzen, und die persönlichen Daten, die uns von Kunden, Partnern und Interessenten überlassen werden, vertraulich zu behandeln. Grundsätzlich können Sie unsere Website jederzeit besuchen und durchblättern, ohne persönliche Informationen anzugeben. Persönliche Daten, die Sie uns über Registrierung auf unserer Site mitteilen, werden weder verkauft noch Dritten überlassen, sondern sind ausschließlich zur unternehmensinternen Verwendung bestimmt.<br/>
      
      <h2>Google Analytics</h2>
      <br/>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.<br/>"
      />
    </Container>
  )
}

export default Page

export const pageConfig: PageConfig = {
  label: 'Impressum',
  childTemplates: []
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export {Head} from '@atsnek/jaen'

