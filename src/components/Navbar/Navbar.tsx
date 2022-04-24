import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';

import menus from './menus.json';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Box bg='blue.800' color='white' py='1rem'>
      <Container maxW='container.lg'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Heading>ALAMI Website Test</Heading>
          <Flex gap='1rem'>
            {menus.map(({ to, label }) => (
              <Link key={to} to={to}>
                {pathname === to ? <strong>{label}</strong> : label}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
