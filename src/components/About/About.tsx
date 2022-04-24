import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const About = (): JSX.Element => {
  return (
    <Flex gap={12} direction={['column', 'row']}>
      <Flex w={['100%', '50%', '33.33%']}>
        <Box bg='blue.50' p={6} borderRadius='xl' height={'100%'}>
          <Heading pb={4}>About 1</Heading>
          <Flex alignItems='center' height={'90%'}>
            <Text>
              Dolore do elit do deserunt occaecat adipisicing elit ullamco
              consequat. Ut ex culpa commodo in qui consequat tempor aliqua do.
              Non consectetur occaecat proident nisi tempor. Sunt dolore sit
              elit amet aute officia voluptate. Mollit Lorem et ex voluptate
              dolor nulla. Eiusmod sit eiusmod exercitation mollit dolore
              aliquip magna sunt.
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex w={['100%', '50%', '66.67%']}>
        <Box bg='blue.200' p={6} borderRadius='xl'>
          <Heading pb={4}>About 2</Heading>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem>
              Eu commodo veniam minim eiusmod do anim voluptate non non sunt
              nisi veniam mollit laboris. Ex labore incididunt fugiat culpa.
              Nisi aute occaecat veniam esse tempor do eu aute consequat.
              Incididunt nulla nisi officia veniam. Elit enim nostrud magna do
              nulla pariatur in exercitation deserunt occaecat cupidatat amet.
            </GridItem>
            <GridItem>
              Cillum pariatur do sit excepteur aute duis anim reprehenderit
              velit sunt enim do proident elit. Deserunt cupidatat Lorem
              pariatur ad do deserunt duis aute consectetur dolor dolor ut.
              Irure ad velit aliquip sunt occaecat. Magna culpa nisi aute
              aliquip qui proident eu consequat reprehenderit sint labore ipsum.
              consequat magna ea.
            </GridItem>
            <GridItem>
              Magna tempor nulla in velit consectetur reprehenderit mollit
              aliquip id enim in. Dolore commodo adipisicing exercitation anim
              aliquip nostrud mollit occaecat proident sint. Irure velit nostrud
              est enim consequat ut ad est ex proident elit nisi. Irure culpa eu
              nisi aute amet ex consectetur.
            </GridItem>
            <GridItem>
              Aute aute occaecat id do commodo consectetur amet amet occaecat
              aute aute laboris voluptate ullamco. Sunt enim sunt esse ad irure
              deserunt voluptate et. Commodo tempor laborum fugiat duis officia
              magna quis. Do occaecat sunt cillum est deserunt ad.
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
};

export default About;
