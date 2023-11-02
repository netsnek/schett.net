import React, { FC, useMemo } from 'react';
import Navigation from './Navigation/Navigation';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import Footer from './Footer';
import { useLocation } from '@reach/router';

import { useAuthenticationContext, useCMSManagementContext } from '@atsnek/jaen';

interface AppLayoutProps {
  children?: React.ReactNode;
  path?: string;
}

/**
 * The global layout component.
 * This should not be directly used in pages, but used in gatsby.
 */
const AppLayout: FC<AppLayoutProps> = ({
  children,
  path
}) => {
  const cmsManager = useCMSManagementContext();
  const location = useLocation();
  const topNavDisclosure = useDisclosure(); // for the top nav mobile drawer
  const { isAuthenticated } = useAuthenticationContext();

  return (
    <>

        <Flex minW="210px" h="max(100%, 100vh)" minH="100vh" direction="column" pb={5}>
          {!isAuthenticated && (
            <Navigation path='/'/>
          )}
          <Box flex="1">
            {children}
          </Box>
        </Flex>
      <Footer />
    </>
  );
};

export default AppLayout;