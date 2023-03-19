import React, { useState } from 'react';
import { Box, space } from '@chakra-ui/react';
import Player from '../componets/Player';
import TrackList from '../componets/TrackList';
import Tabs from '../componets/UI/Tabs';
import useSound from 'use-sound';
import track1 from '../assets/mp3/track1.mp3';
import track2 from '../assets/mp3/track2.mp3';
import track3 from '../assets/mp3/track3.mp3';
import track4 from '../assets/mp3/track4.mp3';
import track5 from '../assets/mp3/track5.mp3';
import track6 from '../assets/mp3/track6.mp3';
import track7 from '../assets/mp3/track7.mp3';
import track8 from '../assets/mp3/track8.mp3';
import track9 from '../assets/mp3/track9.mp3';
import track10 from '../assets/mp3/track10.mp3';
import track11 from '../assets/mp3/track11.mp3';
import track12 from '../assets/mp3/track12.mp3';
import track13 from '../assets/mp3/track13.mp3';
import track14 from '../assets/mp3/track14.mp3';
const HomePage = () => {
  const [tracks, setTracks] = useState([
    {
      id: 0,
      img: './assets/TopChart/img/track2.jpg',
      audio: track2,
      musician: 'Король и Шут',
      title: 'Кукла колдуна',
      isPlaying: false,
    },
    {
      id: 1,
      img: './assets/TopChart/img/track3.jpg',
      audio: track3,
      musician: 'Londzil',
      title: 'Low',
      isPlaying: false,
    },
    {
      id: 2,
      img: './assets/TopChart/img/track4.jpg',
      audio: track4,
      musician: 'Azzi',
      title: 'Мне не 20',
      isPlaying: false,
    },
    {
      id: 3,
      img: './assets/TopChart/img/track5.jpg',
      audio: track5,
      musician: 'SHOOVAL',
      title: 'Айти стартап',
      isPlaying: false,
    },
    {
      id: 4,
      img: './assets/TopChart/img/track6.jpg',
      audio: track6,
      musician: 'Oxxxymiron',
      title: 'Где нас нет',
      isPlaying: false,
    },
    {
      id: 5,
      img: './assets/TopChart/img/track7.jpg',
      audio: track7,
      musician: 'Макс Корж',
      title: 'Эндорфин',
      isPlaying: false,
    },
    {
      id: 6,
      img: './assets/TopChart/img/track8.jpg',
      audio: track8,
      musician: 'Остап Парфёнов',
      title: 'Я устал',
      isPlaying: false,
    },
    {
      id: 7,
      img: './assets/TopChart/img/track9.jpg',
      audio: track9,
      musician: 'Нурминский',
      title: 'Друг',
      isPlaying: false,
    },
    {
      id: 8,
      img: './assets/TopChart/img/track10.jpg',
      audio: track10,
      musician: 'Каста',
      title: 'Про Макса',
      isPlaying: false,
    },
    {
      id: 9,
      img: './assets/TopChart/img/track11.jpg',
      audio: track11,
      musician: 'Макс Корж',
      title: 'Малолетка (Розочка Remix)',
      isPlaying: false,
    },
    {
      id: 10,
      img: './assets/TopChart/img/track12.jpg',
      audio: track12,
      musician: 'Мот',
      title: 'Тарантино',
      isPlaying: false,
    },
    {
      id: 11,
      img: './assets/TopChart/img/track13.jpg',
      audio: track13,
      musician: 'Папин Олимпос',
      title: 'Динозаврики',
      isPlaying: false,
    },
    {
      id: 12,
      img: './assets/TopChart/img/track14.jpg',
      audio: track14,
      musician: 'pyrokinesis',
      title: 'Цветами радуги',
      isPlaying: false,
    },
  ]);
  const [track, setTrack] = useState(tracks[0]);
  const [volume, setVolume] = useState(0.4);
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause, duration, sound, stop }] = useSound(track.audio, {
    volume: volume,
  });

  const [currTime, setCurrTime] = useState({
    min: '00',
    sec: '0',
  });

  const [time, setTime] = useState({
    min: '00',
    sec: '0',
  });

  
  const queue = (id) => {
    if (id < tracks.length && id >= 0) {
      setTrack(tracks[id]);
    } else {
      setTrack(tracks[0]);
      setIsPlaying(false);
    }
  };
  

  const nextTrack = id => {
    stop();
    if (id < tracks.length && id >= 0) {
      setIsPlaying(false);
      setTrack(tracks[id]);
      
    } else {
      setIsPlaying(false);
      setTrack(tracks[0]);
      
    }
  };

  const startPlay = track => {
    stop();
    setTrack(track);
    setIsPlaying(false);
  };

  return (
    <Box
    display={"flex"}
      justifyContent={"space-between"}
      alignItems={'center'}
      bgColor={'#f4f4f4'}
      maxH={"100vh"}
    >
      <Tabs startPlay={startPlay} tracks={tracks} currentTrack={track} isPlaying={isPlaying}/>
      
    
      <Player
        track={track}
        tracks={tracks}
        setTrack={setTrack}
        duration={duration}
        sound={sound}
        play={play}
        pause={pause}
        volume={volume}
        setVolume={setVolume}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        nextTrack={nextTrack}
        startPlay={startPlay}
        time={time}
        currTime={currTime}
        queue={queue}
        setCurrTime={setCurrTime}
        setTime={setTime}
      />

      

      <TrackList
        startPlay={startPlay}
        tracks={tracks}
        currentTrack={track}
        isPlaying={isPlaying}
      />
    </Box>
  );
};

export default HomePage;
