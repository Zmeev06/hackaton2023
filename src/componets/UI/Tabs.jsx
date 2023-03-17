import { Box, Container, Flex, Button } from '@chakra-ui/layout';
import React from 'react'

const Tabs = (btns) => {
    return (
        <Container backgroundColor={"grey"} maxW={"65"} height={"100vh"}>
            <Flex flexDirection={"column"} maxW="50px" justifyContent={'space-around'}>
                {btns.map((btn, index) => <Button key={index}>{btn.body}</Button>)}
            </Flex>
        </Container>
     );
}
 
export default Tabs;