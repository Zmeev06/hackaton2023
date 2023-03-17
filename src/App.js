import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Tabs  from './componets/UI/Tabs'
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Tabs></Tabs>
    </ChakraProvider>
  );
}

export default App;
