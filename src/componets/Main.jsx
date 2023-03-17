import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Tabs from './UI/Tabs';

const Main = () => {
  return (
    <Box>
      <Flex>
        <Tabs />
        <Container>
          <Heading maxW={"181"} size={"lg"}>Discover New music</Heading>
        </Container>
      </Flex>
    </Box>
  );
};

export default Main;
