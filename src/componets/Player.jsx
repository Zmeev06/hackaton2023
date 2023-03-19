import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  Heading,
  IconButton,
  Image,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from '@chakra-ui/react';

import PlayIcon from './UI/CustomIcons/PlayIcon';
import PauseIcon from './UI/CustomIcons/PauseIcon';
import NextIcon from './UI/CustomIcons/NextIcon';
import PreviousIcon from './UI/CustomIcons/PreviousIcon';
import RepeatIcon from './UI/CustomIcons/RepeatIcon';
import RandomIcon from './UI/CustomIcons/RandomIcon';
import SoundOnIcon from './UI/CustomIcons/SoundOnIcon';
import SoundOffIcon from './UI/CustomIcons/SoundOffIcon';

const Player = ({
  track,
  tracks,
  setTrack,
  duration,
  sound,
  play,
  pause,
  volume,
  setVolume,
  isPlaying,
  setIsPlaying,
  nextTrack,
  time,
  currTime,
  setTime,
  setCurrTime,
  queue,
}) => {
  useEffect(() => {
    if (currTime.min * 60 + currTime.sec === time.min * 60 + time.sec - 1) {
      setIsPlaying(false);
      setTrack(tracks[track.id + 1]);
    }
  }, [currTime]);

  const [seconds, setSeconds] = useState();
  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // приостанавливаем воспроизведение звука
      setIsPlaying(false);
    } else {
      play(); // воспроизводим аудиозапись
      setIsPlaying(true);
    }
  };
  return (
    <Card
      mr={{ base: 0, sm: 4 }}
      p={{ base: '10px', sm: '30px', md: 5, lg: 5, xl: 5 }}
      w={{ base: '80vw', sm: '80vw', md: '95vw', lg: '95vw', xl: '600px' }}
      h={{ base: '97vh', sm: '95vh', md: '95vh', lg: '95vh', xl: '850px' }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Image
        src={track.img}
        w={{ base: '65vw', sm: '40vh' }}
        borderRadius={10}
      />
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'space-between'}
        h={'40%'}
        w={'100%'}
        mb={12}
      >
        <Heading size={'lg'} mt={2}>
          {track.musician}
        </Heading>
        <Heading size={'md'}>{track.title}</Heading>
        <Flex justifyContent={'space-between'} w={'85%'}>
          <Text>
            {Number.isNaN(currTime.min) ? "0" : currTime.min}:
            {Number.isNaN(currTime.sec) ? "00" : currTime.sec < 10 ? `0${currTime.sec}` : currTime.sec}
          </Text>
          <Text>
            {time.min}:{time.sec < 10 ? `0${time.sec}` : time.sec}
          </Text>
        </Flex>
        <Slider
          w={'90%'}
          colorScheme={'pink'}
          defaultValue={0}
          min={0}
          max={duration / 1000}
          step={1}
          value={seconds}
          onChange={e => {
            sound.seek([e]);
          }}
        >
          <SliderTrack bg="pink.200">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="pink.600" />
          </SliderTrack>
          <SliderThumb boxSize={3} />
        </Slider>
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'80%'}>
          <IconButton colorScheme={'none'} icon={<RandomIcon />} />
          <IconButton
            icon={<PreviousIcon w={'35px'} h={'25px'} />}
            colorScheme={'none'}
            onClick={() => nextTrack(track.id - 1)}
          />
          <IconButton
            w={{ base: '40px', sm: '40px', md: '50px', lg: '50px', xl: '50px' }}
            h={{ base: '40px', sm: '40px', md: '50px', lg: '50px', xl: '50px' }}
            borderRadius={'100'}
            colorScheme={'blue'}
            icon={isPlaying ? <PauseIcon mb={1} w={'50px'} /> : <PlayIcon />}
            onClick={() => playingButton()}
          />
          <IconButton
            icon={<NextIcon w={'35px'} h={'25px'} />}
            colorScheme={'none'}
            onClick={() => nextTrack(track.id + 1)}
          />
          <IconButton colorScheme={'none'} icon={<RepeatIcon />} />
        </Flex>
        <Flex alignItems={'center'}>
          <IconButton
            colorScheme={'none'}
            icon={
              volume ? (
                <SoundOnIcon boxSize={6} />
              ) : (
                <SoundOffIcon boxSize={6} />
              )
            }
            onClick={() => (volume ? setVolume(0) : setVolume(0.4))}
          />
          <Text w="50px">{Math.round(volume * 250)}%</Text>
        </Flex>

        <Slider
          w={'90%'}
          colorScheme={'pink'}
          defaultValue={volume}
          min={0}
          max={0.4}
          step={0.02}
          value={volume}
          onChange={e => {
            setVolume(e);
          }}
        >
          <SliderTrack bg="pink.200">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="pink.600" />
          </SliderTrack>
          <SliderThumb boxSize={3} />
        </Slider>
      </Flex>
    </Card>
  );
};

export default Player;
