import {
  Text,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  Stack,
  Tooltip,
  HStack,
  LinkBox,
  Heading,
} from "@chakra-ui/react";

import { FaLongArrowAltLeft } from "@react-icons/all-files/fa/FaLongArrowAltLeft";
import { FaShopify } from "@react-icons/all-files/fa/FaShopify";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { Link as GatsbyLink, navigate } from "gatsby";
import { FC } from "react";
import BottomNav from "./BottomNav";
//import {NavAuthButton} from './NavAuthButton'

import { useAuthenticationContext } from "@atsnek/jaen";
import Logo from "../../gatsby-plugin-jaen/components/Logo";
import { MobileHambuger } from "./MobileHamburger";
import { NavAuthButton } from "./NavAuthButton";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { Field } from "@atsnek/jaen";

interface INavbarProps {
  pathname: string;
  onBasketClick?: () => void;
  onSearchClick?: () => void;
  onContactClick?: () => void;
}

export const Navbar: FC<INavbarProps> = ({
  pathname,
  onSearchClick,
  onBasketClick,
  onContactClick,
}) => {
  const { isAuthenticated } = useAuthenticationContext();
  const { user, openLoginModal, logout } = useAuthenticationContext();

  return (
    <Stack
      display={isAuthenticated ? "none" : "flex"}
      direction="row"
      spacing="4"
      h={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Flex flex="1" textAlign="center">
        <MobileHambuger pathname={pathname} />
      </Flex>

      <Flex flex="1" justifyContent="center">
        <HStack as={LinkBox} w="max-content">
          <Logo maxH="50px" maxW="50px" mr="3"/>
          <Text
            display={{ base: "none", md: "flex"}}
            as={Heading}
            whiteSpace={"nowrap"}
            size="h5030"
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            //textAlign="left"
            //color="#b57edc"
          >
            Agentur Nico Schett
          </Text>
        </HStack>
      </Flex>
      <Flex flex="1" justifyContent="end">
        <ButtonGroup
          spacing={{
            base: 0,
            md: 2,
          }}
        >
          <Tooltip label="Login" aria-label="Login">
            <Button
              display={{
                base: "none",
                md: "flex",
              }}
              size="sm"
              leftIcon={<FaUser />}
              onClick={openLoginModal}
            >
              Anmelden
            </Button>
          </Tooltip>
          <Tooltip label="Kontakt" aria-label="Kontakt">
            <Button
              display={{
                base: "none",
                md: "flex",
              }}
              size="sm"
              aria-label="Kontakt"
              leftIcon={<FaPhoneAlt />}
              onClick={onContactClick}
            >
              Kontakt
            </Button>
          </Tooltip>
          <Tooltip label="Kontakt" aria-label="Kontakt">
            <IconButton
              filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
              display={{
                base: "flex",
                md: "none",
              }}
              size="md"
              aria-label="Kontakt"
              icon={<FaPhoneAlt />}
              onClick={onContactClick}
            />
          </Tooltip>
        </ButtonGroup>
      </Flex>
    </Stack>
  );
};
