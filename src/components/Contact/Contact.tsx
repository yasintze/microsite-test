import React from 'react';
import { Flex } from '@chakra-ui/react';
import ContactInput from './ContactInput';
import ContactPhone from './ContactPhone';

const Contact = (): JSX.Element => {
  return (
    <>
      <Flex gap={12} direction={['column', 'row']} alignItems='center'>
        <ContactInput />
        <ContactPhone />
      </Flex>
    </>
  );
};

export default Contact;
