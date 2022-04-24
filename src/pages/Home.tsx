import React from 'react';
import { Flex } from '@chakra-ui/react';

import About from '../components/About';
import Header from '../components/Header';
import { Contact } from '../components/Contact';

const HomePage = (): JSX.Element => {
  return (
    <Flex direction='column' gap={6}>
      <Header title='This is Homepage' />
      <About />
      <Contact />
    </Flex>
  );
};

export default HomePage;
