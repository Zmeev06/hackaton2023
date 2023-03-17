import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import TrackList  from './componets/TrackList'
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TrackList/>
    </ChakraProvider>
  );
}

export default App;
