import React from 'react';
import {
  Heading,
  Flex,
  Avatar,
  Text,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Drawer,
  DrawerOverlay,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import MusicIcon from "./CustomIcons/MusicIcon"
import PlayMusicAnimation from './Animation/PlayMusicAnimation';

const MyDrawer = ({ startPlay, tracks, currentTrack, isPlaying }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton colorScheme="pink" borderRadius={100} icon={<MusicIcon mt={1} boxSize={8}/>} onClick={onOpen} display={{xl:"none"}}/>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={{base:"xs", sm:"xs", md:"sm", lg:"sm"}}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" display="flex" justifyContent="space-between">
            Your music
            <IconButton display={{base:"block", sm:"block", md:"none", lg:"none"}} icon={<CloseIcon/>} onClick={onClose}></IconButton>
          </DrawerHeader>
          <DrawerBody>
          {tracks.map((item, index) => (
          <Flex key={index} w={"300px"} alignItems={"center"} mb={2} cursor={"pointer"} onClick={() => {
            startPlay(item)
            onClose()}}>
            {currentTrack.id === item.id && isPlaying ? <PlayMusicAnimation/> : <Flex w={"13px"}></Flex>}
            <Avatar src={item.img} ml={2}/>
            <Flex flexDirection={'column'} mx={"7"}>
              <Heading size={{lg:"xs", xl:"md"}}>{item.musician}</Heading> <Text fontSize={{lg:"16px", xl:"20px"}}>{item.title}</Text>
            </Flex>
            
          </Flex>
        ))}
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
