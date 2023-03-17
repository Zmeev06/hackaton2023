import React from 'react';
import { Icon } from '@chakra-ui/react';

// using `path`
const Headphones = props => (
  <Icon viewBox="0 0 20 20" {...props}>
    <path
      fill={props.color}
      d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10V17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H4C4.79565 18 5.55871 17.6839 6.12132 17.1213C6.68393 16.5587 7 15.7956 7 15V13C7 12.2044 6.68393 11.4413 6.12132 10.8787C5.55871 10.3161 4.79565 10 4 10H2C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10H16C15.2044 10 14.4413 10.3161 13.8787 10.8787C13.3161 11.4413 13 12.2044 13 13V15C13 15.7956 13.3161 16.5587 13.8787 17.1213C14.4413 17.6839 15.2044 18 16 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17V10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM4 12C4.26522 12 4.51957 12.1054 4.70711 12.2929C4.89464 12.4804 5 12.7348 5 13V15C5 15.2652 4.89464 15.5196 4.70711 15.7071C4.51957 15.8946 4.26522 16 4 16H2V12H4ZM18 16H16C15.7348 16 15.4804 15.8946 15.2929 15.7071C15.1054 15.5196 15 15.2652 15 15V13C15 12.7348 15.1054 12.4804 15.2929 12.2929C15.4804 12.1054 15.7348 12 16 12H18V16Z"
    />
  </Icon>
);

export default Headphones;
