import React from 'react';
import { Flex } from '@chakra-ui/react';

import About from '../components/About';
import Header from '../components/Header';

const Home = () => {
  return (
    <Flex direction='column' gap={6}>
      <Header title='This is Homepage' />
      <About />
    </Flex>
  );
};

export default Home;
