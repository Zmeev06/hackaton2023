import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Tabs from './componets/UI/Tabs';
import TopChart from './componets/Player';
import TrackList from './componets/TrackList';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
