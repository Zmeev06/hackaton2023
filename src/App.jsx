import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import TrackList from './componets/TrackList';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TrackList></TrackList>
    </ChakraProvider>
  );
}

export default App;
