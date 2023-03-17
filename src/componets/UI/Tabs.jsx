import { Box, Container, Flex, IconButton } from '@chakra-ui/react';
import React, {useState} from 'react'

const Tabs = () => {
    const [btns, setBtns] = useState([{img:"./assets/headfones.svg"}])
    return (
        <Container backgroundColor={"grey"} maxW={"65"} height={"100vh"}>
            <Flex flexDirection={"column"} maxW="50px" justifyContent={'space-around'}>
                {btns.map((btn, index) => <IconButton  key={index}></IconButton>)}
            </Flex>
        </Container>
     );
}
 
export default Tabs;