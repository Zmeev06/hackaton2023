import React from 'react';
import { Box, Container, Flex, IconButton, Heading } from '@chakra-ui/react';
import Repeat from './UI/CustomIcons/Repeat';
import Mix from './UI/CustomIcons/Mix';

const TrackList = () => {
  return (
    <Box>
      <Container>
        <Heading>Track list</Heading>
        <Flex>
          <IconButton
            aria-label="Search database"
            colorScheme={'none'}
            icon={<Mix/>}
          />
          <IconButton
            colorScheme={"none"}
            aria-label="Search database"
            icon={<Repeat/>}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default TrackList;
