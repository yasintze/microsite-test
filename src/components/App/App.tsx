import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';

import About from '../About';
import Home from '../../pages/Home';
import Navbar from '../Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Box py='2rem'>
        <Container maxW='container.lg'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default App;
