import {
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
  useColorModeValue,
} from "@chakra-ui/react";
import { useContactModal } from "../services/contact";
import { Field } from "@atsnek/jaen";

const ContentSection = () => {
  const contactModal = useContactModal();
  const onContactClick = () => {
    contactModal.onOpen({
      meta: {},
    });
  };

  return (
    <Container
      //minH={"calc(100vh - 60px)"}
      maxW="6xl"
      px={{ base: 6, md: 3 }}
      py={24}
    >
      <Field.Text
        mb="10"
        as={Heading}
        size="h5030"
        fontSize="5xl"
        lineHeight={1}
        fontWeight="bold"
        textAlign="left"
        color="#b57edc"
        name="ContentSectionHeading"
        defaultValue="Dein Paradies für natürliche Seifen! 🌸🌍"
      />
      <Field.Text
        mb="48"
        fontSize="1.2rem"
        textAlign="left"
        lineHeight="1.375"
        fontWeight="400"
        color="gray.500"
        name="ContentSectionText"
        defaultValue="Du bist hier genau richtig, wenn du auf der Suche nach ehrlicher und reiner Hautpflege bist. Unsere handgemachten Seifen sind nicht nur ein luxuriöser Genuss für deine Haut, sondern auch ein echtes Statement für eine nachhaltige und tierfreundliche Lebensweise! 🐾✨
        <br/><br/>
        Warum sind unsere Seifen so besonders? 🌿🤔<br/>
        <br/>
        Die Antwort ist einfach - Liebe und Qualität stecken in jedem noch so kleinen Stückchen. Barbara Mauz-Seifen werden mit größter Sorgfalt und mit den reinsten Zutaten hergestellt. Hauptsächlich verwenden wir natürliche Bestandteile und ätherische Öle, die deine Haut sanft reinigen und sie samtweich hinterlassen. 💦🍃<br/>
        <br/>
        Und das Beste daran? Keine chemischen Zusätze, keine künstlichen Duftstoffe und ganz sicher keine Tierexperimente! Ja, unsere Seifen sind 100% tierversuchsfrei. Weil wir glauben, dass Schönheit und Pflege nicht auf Kosten anderer Lebewesen gehen dürfen. 🐇💕
        <br/>
        Unsere Seifen sehen nicht nur bezaubernd aus, sie duften auch himmlisch! Egal ob du blumige, fruchtige oder erdige Düfte bevorzugst - bei uns findest du deinen persönlichen Favoriten. 🌷🍋🌲<br/>
        <br/>
        Probier es aus und lass dich in die zauberhafte Welt von Barbara Mauz entführen, wo Schönheit, Pflege und Liebe zur Natur Hand in Hand gehen. 💖🌎<br/>
        <br/>
        Finde jetzt deine Lieblingsseife und erlebe eine luxuriöse Hautpflege, die so einzigartig ist wie du selbst! Denn du verdienst nur das Beste. 🛍️✨"
      />
    </Container>
  );
};

export default ContentSection;
