import React, { useState, useContext } from 'react';
import { Alert, Box, Button, Input, Flex, Text } from '@chakra-ui/react';

import { PhoneContext } from '../../context';

const ContactInput = (): JSX.Element => {
  const { setInputValue } = useContext(PhoneContext);
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const savePhoneNumber = () => {
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (value.match(regex)) {
      setIsError(false);
      setInputValue(value);
    } else {
      setIsError(true);
    }
  };

  return (
    <Flex w={['100%', '50%', '33.33%']}>
      <Box p={6} borderRadius='xl' w='100%' textAlign='center'>
        <Flex gap={4} direction='column'>
          {isError && (
            <Alert status='error'>{'Nomor telepon tidak valid'}</Alert>
          )}
          <Text>No. Telp</Text>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Isi nomor telepon'
          />
          <Button bg='blue.200' onClick={savePhoneNumber}>
            Go
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ContactInput;
