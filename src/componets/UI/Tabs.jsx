import { Avatar, Box, Container, Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import Headphones from './CustomIcons/Headphones';
import LikeIcon from './CustomIcons/LikesIcon';
import BooksIcon from './CustomIcons/BooksIcon';

const Tabs = () => {
  const [btns, setBtns] = useState([
    { img: <Headphones color={'white'} /> },
    { img: <LikeIcon color={'white'} /> },
    { img: <BooksIcon color={'white'} /> },
  ]);
  return (
    <Flex
      backgroundColor={'#F2F2F2'}
      maxW={'65'}
      height={'100vh'}
      flexDirection={'column'}
      width={'60px'}
      alignItems={'center'}
      py={6}
    >
      <Avatar src="./assets/tabsicons/profile.jpg" />
      <Flex
        flexDirection={'column'}
        maxW="50px"
        justifyContent={'space-around'}
        alignItems={'center'}
        height={'150px'}
      >
        {btns.map((btn, index) => (
          <IconButton
            borderRadius={20}
            colorScheme={'pink'}
            icon={btn.img}
            key={index}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Tabs;
