import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';

import AboutPage from '../../pages/About';
import ContactPage from '../../pages/Contact';
import HomePage from '../../pages/Home';
import Navbar from '../Navbar';
import { PhoneProvider } from '../../context';

const defaultState = '021-12345678';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState(defaultState);

  return (
    <PhoneProvider value={{ inputValue, setInputValue }}>
      <Navbar />
      <Box py='2rem'>
        <Container maxW='container.lg'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Container>
      </Box>
    </PhoneProvider>
  );
}

export default App;
