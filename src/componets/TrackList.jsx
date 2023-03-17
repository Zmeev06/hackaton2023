import React from 'react';
import { Box, Container, Flex, IconButton, Heading } from '@chakra-ui/react';
import firstSvg from '../assets/TrackList/1.svg'

const TrackList = () => {
  return (
    <Box>
      <Container>
        <Heading>Track list</Heading>
        <Flex>
          <IconButton
          onClick={() => console.log('hui')}
            colorScheme="blue"
            aria-label="Search database"
            icon={firstSvg}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default TrackList;
