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
import {FeaturedProducts} from './organisms/FeaturedProductsSection/FeaturedProductsSection'
import {GoogleMaps} from './GoogleMaps'

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
      //align={'center'}
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
      //textAlign={'center'}
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
      <Avatar src={src} mb={2} objectFit={'contain'} />
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
        {/* <FeaturedProducts anchor='test' featuredProducts={[{image: "https://osg.snek.at/storage/BQACAgQAAxkDAAIsW2VFGtrO0UmpkYZV0BgslLcByh8qAAJRDwACCtMwUiMJbD4kmhDjLwQ", handle: "", product: ""},]} productsPagePath=''/> */}
        <Field.Text
          mt={{base: '20 !important', md: '0'}}
          mb="8"
          as={Heading}
          fontSize={{base: '4xl', lg: '5xl'}}
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
          //color="#b57edc"
          name="ContentSectionHeading"
          defaultValue="Wilkommen"
        />
        <Field.Text
          //mb="16"
          fontSize="1.2rem"
          textAlign="left"
          fontWeight="400"
          color="gray.500"
          name="ContentSectionText"
          defaultValue='In der schnelllebigen digitalen Ära von heute kann es eine echte Herausforderung sein, den Überblick über die neuesten Technologien und Infrastrukturen zu behalten. Dies ist der Antrieb meiner Arbeit. <br/>
          <br/>
          Als ein Großmeister in JavaScript und Open-Source-Veteran, gepaart mit einem soliden Grundlagenwissen in Cyber-Security, biete ich die Fähigkeiten, die dazu benötigt werden, Ihr Geschäft auf das nächste Level zu heben. Indem ich mich immer auf eine proaktive und lösungsorientierte Arbeitsweise fokussiere, diene ich Ihrem Unternehmen als vertrauenswürdiger Partner in der Webentwicklung und im Aufbau wirkungsvoller ERP-Systeme.<br/>
          <br/>
          "Jaen", ein erfolgreiches ERP-System, das in Zusammenarbeit mit Florian Herbert Kleber IT entwickelt wurde, unterstreicht meine Professionalität und Expertise in diesem Bereich. Die Idee für "Jaen" entstand aus der Not heraus, die wir in vielen Unternehmen erkannten – die Verwendung suboptimaler ERP-Systeme. <br/>
          <br/>
          Mit diesem fortschrittlichen und maßgeschneiderten System konnten wir den Workflow unserer Kunden erheblich optimieren. Es war ein arbeitsintensives, aber unglaublich lohnendes Projekt und dient als Beweis für unsere Problemlösungskompetenzen.<br/>
          <br/>
          Zufriedenheit meiner Kunden ist meine oberste Priorität. Daher sehe ich jedes Projekt als eine Chance, die Balance zwischen Ihren Anforderungen und dem, was technologisch machbar und sinnvoll ist, zu finden. Dabei stelle ich immer sicher, dass jedes System, jede Software und jede Plattform, die ich entwickle, den höchstmöglichen Sicherheitsstandards entspricht.<br/>
          <br/>
          Mit Nico Schett an Ihrer Seite erhalten Sie nicht nur Zugang zu hochqualitativen Enterprise Software-Lösungen, sondern auch einen Partner, der Ihre Geschäftsprozesse versteht und Ihnen alle Tools an die Hand gibt, um Ihren Fortschritt voranzutreiben.<br/>
          <br/>
          - Nico Schett
          '
        />
      </Container>
      <Container maxW={'4xl'} pt={16} as={Stack} spacing={12}>
        <Stack spacing={0}>
          <Field.Text
            mt={{base: '20 !important', md: '0'}}
            mb="8"
            as={Heading}
            fontSize={{base: '4xl', lg: '5xl'}}
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
            name="ContentSectionHeadingTeam"
            defaultValue="Partner"
          />
          <Field.Text
            fontSize="1.2rem"
            color="gray.500"
            name="ContentSectionTextTeam"
            defaultValue="Ich bieten branchenübergreifende Kundenbetreuung mit Unterstützung von Experten aus meinem Netzwerk. Gemeinsam mit unseren Partnern, decken wir ein breites Spektrum an Dienstleistungen ab. Wir sind für dich da, um alle deine technologischen Herausforderungen zu meistern."
          />
        </Stack>
        <Stack
          direction={{base: 'column', md: 'row'}}
          spacing={{base: 10, md: 4, lg: 10}}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>IT & Cloud</TestimonialHeading>
              <TestimonialText>
                <Field.Text
                  name="ContentSectionTextTeam1"
                  defaultValue='Als Experte für IT-Services und ein Meister der Cloud-Technologie🚀, mit starker Basis in der Cyber-Security🔒, liegt meine Expertise in der Betreuung von IT-Systemen und in der Optimierung von Geschäftsprozessen. Die erfolgreiche Entwicklung eines gemeinsamen ERP-Systems namens "Jaen"✨, zusammen mit Agentur Nico Schett, unterstreicht meine Fähigkeit, proaktiv und lösungsorientiert zu handeln. Ich stehe stets bereit, Herausforderungen zu meistern, bevor sie entstehen, und sorge somit für ein reibungsloses technologisches Erlebnis. 💻🔧 '
                />
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://osg.snek.at/storage/BQACAgQAAxkDAAIsX2VG2JlO_XvDt3JcexGfxSLesn_oAAJZEAACLqAxUnY2C2EatToLLwQ'
              }
              name={'Florian Kleber'}
              title={'fhkit.at'}
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
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Design & Marketing</TestimonialHeading>
              <TestimonialText>
                <Field.Text
                  name="ContentSectionTextTeam3"
                  defaultValue="Wir sind eine kreative 🎨 Werbeagentur in der charmanten Stadt Villach. Zusammen mit Florian Herbert Kleber IT arbeiten wir daran, moderne, stilvolle und wirkungsvolle Online-Auftritte zu gestalten."
                />
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://osg.snek.at/storage/BQACAgQAAxkDAAIsXWVGJpY-_RcMtfNgb1pEQHkhgpzcAAIdEQACCtM4Undi6U7j1-BRLwQ'
              }
              name={'Kanbon'}
              title={'kanbon.at'}
            />
          </Testimonial>
        </Stack>
        <Field.Text
          mt={{base: '20 !important', md: '0'}}
          mb="8"
          as={Heading}
          fontSize={{base: '4xl', lg: '5xl'}}
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
          //color="#b57edc"
          name="MapSectionHeading"
          defaultValue="Büroräume"
        />
        <Box
          mb="8"
          h="xl"
          w="full"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="dark">
          <GoogleMaps
            objectFit="cover"
            h="full"
            w="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.9368830188732!2d16.390513676126197!3d48.207831646267955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0712a8ac8f77%3A0x79ca06186618927c!2sL%C3%B6wengasse%2028%2C%201030%20Wien!5e0!3m2!1sen!2sat!4v1699083025628!5m2!1sen!2sat"
          />
        </Box>
      </Container>
      <Flex flex={1} width={'100%'} overflow={'hidden'}>
        <Neurons display={{base: 'none', sm: 'flex'}} />
        <Neurons display={{base: 'none', md: 'flex'}} />
        <Neurons display={{base: 'none', xl: 'flex'}} />
        <Neurons />
      </Flex>
    </Box>
  )
}

export default ContentSection
