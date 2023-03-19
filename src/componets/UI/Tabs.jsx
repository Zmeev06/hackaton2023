import {
  Avatar,
  Box,
  Container,
  Image,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Headphones from './CustomIcons/Headphones';
import LikeIcon from './CustomIcons/LikesIcon';
import BooksIcon from './CustomIcons/BooksIcon';
import QuitIcon from './CustomIcons/QuitIcon';
import { SettingsIcon } from '@chakra-ui/icons';
import MyDrawer from './Drawer';

const Tabs = ({startPlay, tracks, currentTrack, isPlaying}) => {
  const [btns, setBtns] = useState([
    { img: <Headphones color={'white'} /> },
    { img: <LikeIcon color={'white'} /> },
    { img: <BooksIcon color={'white'} /> },
  ]);
  return (
    <Flex
    mr={{lg:"16vh", md:"10vw"}}
    boxShadow={"5px 0px 30px grey"}
      backgroundColor={'#FAFAFA'}
      maxW={'65px'}
      height={'100vh'}
      flexDirection={'column'}
      width={'60px'}
      alignItems={'center'}
      py={4}
      justifyContent={'space-between'}
      borderRight={"1px solid #000"}
    >
      <Flex flexDirection={'column'} alignItems={'center'} h={"350px"} justifyContent={"space-between"}>
        <Flex flexDirection={'column'} alignItems={'center'}>
          <Image src={'./assets/Tabs/logo.png'} w={'30px'} />
          <Flex w={"50px"} backgroundColor={"#000"} h={"2px"} opacity={"30%"} my={6}></Flex>
          <Avatar src="./assets/Tabs/profile.jpg" display={{base:"none", sm:"none", md:"none", lg:"none", xl:"block"}}/>
          <MyDrawer startPlay={startPlay} tracks={tracks} currentTrack={currentTrack} isPlaying={isPlaying} display={{xl:"none"}}/>
        </Flex>
        <Flex
          flexDirection={'column'}
          maxW="50px"
          justifyContent={'space-around'}
          alignItems={'center'}
          height={'170px'}
        >
          {btns.map((btn, index) => (
            <IconButton
              borderRadius={20}
              colorScheme={'blue'}
              icon={btn.img}
              key={index}
            />
          ))}
        </Flex>
      </Flex>

      <Flex flexDirection={'column'}>
        <IconButton
          borderRadius={20}
          colorScheme={'blue'}
          mb={3}
          icon={<SettingsIcon color={'white'} />}
        />
        <IconButton
          borderRadius={20}
          colorScheme={'red'}
          icon={<QuitIcon color={'white'} />}
        />
      </Flex>
    </Flex>
  );
};

export default Tabs;
