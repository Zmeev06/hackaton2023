import { Container, Heading } from '@chakra-ui/react';
import React from 'react'

const NewTrack = ({children, ...propsw}) => {
    
    return ( 
        <Container>
            <Heading maxW={"181"} size={"lg"}>Discover New music</Heading>
            {children}
        </Container>
     );
}
 
export default NewTrack;