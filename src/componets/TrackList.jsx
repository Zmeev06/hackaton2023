import React, { useState } from 'react';
import { Avatar, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import PlayMusicAnimation from './UI/Animation/PlayMusicAnimation';
import MyDrawer from './UI/Drawer';

const TrackList = ({startPlay, tracks, currentTrack, isPlaying}) => {
  return (

    <Flex flexDirection={'column'} borderLeft={"1px solid #828282"} pl={3} bgColor={"#FFF"} display={{base:"none",sm:"none",md:"none", lg:"none", xl:"flex"}} maxH={"100vh"} overflowY={"scroll"} maxW={{lg:"300px", xl:"500px"}} w={'30%'} h={"100vh"} boxShadow={"-5px 0px 20px grey "}>
      <Heading size={{lg:"md", xl:"lg"}} my={"5"}>Your sounds</Heading>
      
      <Flex flexDirection={'column'}>
        {tracks.map((item, index) => (
          <Flex key={index} w={"300px"} alignItems={"center"} mb={2} cursor={"pointer"} onClick={() => startPlay(item)}>
            {currentTrack.id === item.id && isPlaying ? <PlayMusicAnimation/> : <Flex w={"13px"}></Flex>}
            <Avatar src={item.img} ml={2}/>
            <Flex flexDirection={'column'} mx={"7"}>
              <Heading size={{lg:"xs", xl:"md"}}>{item.musician}</Heading> <Text fontSize={{lg:"16px", xl:"20px"}}>{item.title}</Text>
            </Flex>
            
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default TrackList;
