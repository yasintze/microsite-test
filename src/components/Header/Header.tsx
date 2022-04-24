import React from 'react';
import { Heading } from '@chakra-ui/react';

type HeaderProps = {
  title?: string;
};

const Header = ({ title = 'No title' }: HeaderProps): JSX.Element => (
  <Heading size='lg' textAlign='center'>
    {title}
  </Heading>
);

export default Header;
