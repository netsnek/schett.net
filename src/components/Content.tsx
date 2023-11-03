import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import {useContactModal} from '../services/contact'
import {Field} from '@atsnek/jaen'
import Neurons from './Neurons'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const {children} = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const {children} = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      mt="5"
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const {children} = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const {children} = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} objectFit={"contain"} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

const ContentSection = () => {
  const contactModal = useContactModal()
  const onContactClick = () => {
    contactModal.onOpen({
      meta: {}
    })
  }

  return (
    <Box bg="#ffffff">
      <Container
        //minH={"calc(100vh - 60px)"}
        maxW="4xl"
        px={{base: 6, md: 3}}
        py={24}>
        <Field.Text
          mb="10"
          as={Heading}
          size="h5030"
          fontSize="5xl"
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
          //color="#b57edc"
          name="ContentSectionHeading"
          defaultValue="Wilkommen! 🙌 "
        />
        <Field.Text
          mb="48"
          textAlign="left"
          fontWeight="400"
          color="gray.500"
          name="ContentSectionText"
          defaultValue='
        Es fühlt sich an, als wäre es immer meine Leidenschaft gewesen, meine eigenen Unternehmen zu führen und mit Technologie zu jonglieren. Heute möchte ich mit euch darüber sprechen – von den Artikelanfängen bis zur aktuellen Realität und die Zukunft, die wir gerade gestalten. 🚀💻
        <br/><br/>
        Die Gründung von Florian Herbert Kleber IT am 21.07.2020, war der Beginn meiner Reise in die faszinierende Welt der Informationstechnologie. Angetrieben von meiner Leidenschaft✨, wollte ich den Bedarf an qualitativ hochwertigen und maßgeschneiderten IT-Dienstleistungen erfüllen und so gründete ich dieses Unternehmen in Dreilach. Aber schon bald, werden wir unseren Sitz nach Wien verlegen. 📦💼
        <br/><br/>
        Ich habe stets unseren Fokus auf Cyber-Security 🔒, Cloud-Diensten ☁️ und Softwareentwicklung 🎨 gelegt, stets bestrebt, die besten Lösungen für unsere Kunden zu bieten. 🙌 Unser Berufszweig ermöglicht es uns, für eine Vielzahl von Branchen zu arbeiten, immer auf der Suche nach den besten IT-Lösungen für jedes einzelne Unternehmen.
        <br/><br/>
        Während dieser wunderbaren Reise hatten wir die Chance, unglaubliche Projekte zu verwirklichen, zusammen mit einigen der besten Experten unseres Netzwerks. 🌐 Eines meiner liebsten Projekte war die Zusammenarbeit mit einem unserer Partner, um ein erfolgreiches ERP-System namens "Jaen" zu entwickeln! 😎
        <br/><br/>
        Nun, wir ruhen uns nicht auf unseren Lorbeeren aus. Unser Unternehmen ist stets bemüht, sich weiterzuentwickeln und unser Angebot zu verfeinern. Deshalb freue ich mich, euch einen kleinen Leckerbissen unserer kommenden Unternehmungen zu geben... 😉 
        <br/><br/>
        Wir planen die Gründung einer neuen Abteilung für Softwareentwicklung für Enterprise-Software! Es ist eine aufregende Zeit, und wir sind bereit, neue Meilensteine zu erreichen. 💡🎯
        <br/><br/>
        Es ist wirklich erstaunlich zu sehen, wie weit Florian Herbert Kleber IT gekommen ist und ich bin begeistert von dem, was noch kommen wird. Unsere Arbeit ist unsere Leidenschaft und wir geben immer unser bestes, um der IT-Welt das Beste von uns zu geben.
        <br/><br/>
        Ich möchte mich bei euch bedanken, dass ihr uns auf dieser spannenden Reise begleitet und wir können es kaum erwarten, euch zu zeigen, was als Nächstes kommt! 🚀
        <br/><br/>
        Behaltet also unsere Updates im Auge. Bis dahin, bleibt sicher und digital! 😉👍
        <br/><br/>
        - Florian'
        />
      </Container>
      <Container maxW={'4xl'} pt={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Field.Text
            mb="10"
            as={Heading}
            size="h5030"
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
            name="ContentSectionHeadingTeam"
            defaultValue="Unsere Partner 🤝"
          />
          <Field.Text
            color="gray.500"
            name="ContentSectionTextTeam"
            defaultValue="Ich bieten branchenübergreifende Kundenbetreuung mit Unterstützung von Experten aus meinem Netzwerk. Gemeinsam mit unseren Partnern, decken wir ein breites Spektrum an Dienstleistungen ab. Wir sind für dich da, um alle deine technologischen Herausforderungen zu meistern💪🚀!"
          />
        </Stack>
        <Stack
          direction={{base: 'column', md: 'row'}}
          spacing={{base: 10, md: 4, lg: 10}}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Software Entwicklung</TestimonialHeading>
              <TestimonialText>
                <Field.Text
                  name="ContentSectionTextTeam1"
                  defaultValue='Als JavaScript-Großmeister🎯 und Open-Source-Veteran⚡, mit starker Cyber-Security-Grundlage🔒, liegt meine Expertise in der Webentwicklung und im Aufbau hochwirksamer ERP-Systeme und CMS⚙️. Die erfolgreiche Entwicklung eines gemeinsamen ERP-Systems namens "Jaen"✨, zusammen mit Florian Herbert Kleber IT, unterstreicht meine Fähigkeit, proaktiv und lösungsorientiert zu handeln. Als technischer Zauberer🧙‍♂️💻 bin ich stets bereit, Probleme zu bewältigen, bevor sie entstehen, und schaffe damit ein reibungsloses technologisches Erlebnis.'
                />
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://osg.snek.at/storage/BQACAgQAAxkDAAIsXGVFHb-_FNhhjNXyNo6Tb4E-1ehnAAJXDwACCtMwUgil7_Q_Zld3LwQ'
              }
              name={'Nico Schett'}
              title={'schett.net'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Elektrotechnik</TestimonialHeading>
              <TestimonialText>
                <Field.Text
                  name="ContentSectionTextTeam2"
                  defaultValue="Ich kombiniere mein Masterstudium in Elektrotechnik⚡️ und Informationstechnik📡 mit hingebungsvoller Arbeit an Technik jeder Art. Besondere Leidenschaft habe ich für das Programmieren von Cloudsystemen, Websites und der Instandhaltung von Computern. Mit ständiger Faszination betreibe ich Server und Netzwerke. Vereinfachen und effizient machen - das ist mein Credo!💪🚀"
                />
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://osg.snek.at/storage/BQACAgQAAxkDAAIsW2VFGtrO0UmpkYZV0BgslLcByh8qAAJRDwACCtMwUiMJbD4kmhDjLwQ'
              }
              name={'Christoph Clementschitsch'}
              title={'neurons.at'}
            />
          </Testimonial>
        </Stack>
      </Container>
      <Flex flex={1} width={'100%'} overflow={'hidden'}>
        <Neurons display={{base: 'none', md: 'flex'}} />
        <Neurons display={{lg: 'none', xl: 'flex'}} />
        <Neurons />
        <Neurons />
      </Flex>
    </Box>
  )
}

export default ContentSection
