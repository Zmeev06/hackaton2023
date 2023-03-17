import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Tabs  from './componets/UI/Tabs'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Main from './componets/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main></Main>
    </ChakraProvider>
  );
}

export default App;
