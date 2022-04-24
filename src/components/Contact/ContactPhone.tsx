import React, { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import { PhoneContext } from '../../context';

const ContactPhone = (): JSX.Element => {
  const { inputValue } = useContext(PhoneContext);

  return (
    <Flex w={['100%', '50%', '66.67%']}>
      <Box p={6} borderRadius='xl' w='100%'>
        <Text>
          <strong>PT. ABC</strong>
          <br />
          Jl Setiabudi no 33
          <br />
          {inputValue}
        </Text>
      </Box>
    </Flex>
  );
};

export default ContactPhone;
