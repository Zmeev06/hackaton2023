import { Box, Container, Flex, IconButton } from '@chakra-ui/react';
import React, {useState} from 'react'
import Headphones from './CustomIcons/Headphones'

const Tabs = () => {
    const [btns, setBtns] = useState([{img:"./assets/headfones.svg"}, {img:"./assets/like.svg"}, {img:"./assets/books.svg"}])
    return (
        <Container backgroundColor={"#F2F2F2"} maxW={"65"} height={"100vh"}>
            <Flex flexDirection={"column"} maxW="50px" justifyContent={'space-around'}>
                {btns.map((btn, index) => <IconButton colorScheme={"white"} icon={<Headphones></Headphones>} key={index}></IconButton>)}
            </Flex>
        </Container>
     );
}
 
export default Tabs;