import React from 'react';
import { Icon } from '@chakra-ui/react';

// using `path`
const BooksIcon = props => (
  <Icon viewBox="0 0 15 18" {...props}>
    <path
      d="M12.5 0H1.70005C1.46135 0 1.23244 0.0948211 1.06365 0.263604C0.89487 0.432387 0.800049 0.661305 0.800049 0.9V15.3C0.800049 15.5387 0.89487 15.7676 1.06365 15.9364C1.23244 16.1052 1.46135 16.2 1.70005 16.2H2.60005V17.1C2.60005 17.3387 2.69487 17.5676 2.86365 17.7364C3.03244 17.9052 3.26135 18 3.50005 18C3.73874 18 3.96766 17.9052 4.13644 17.7364C4.30523 17.5676 4.40005 17.3387 4.40005 17.1V16.2H12.5C13.2161 16.2 13.9029 15.9155 14.4092 15.4092C14.9156 14.9028 15.2 14.2161 15.2 13.5V2.7C15.2 1.98392 14.9156 1.29716 14.4092 0.790812C13.9029 0.284464 13.2161 0 12.5 0ZM9.80005 14.4H2.60005V1.8H9.80005V14.4ZM13.4 13.5C13.4 13.7387 13.3052 13.9676 13.1364 14.1364C12.9677 14.3052 12.7387 14.4 12.5 14.4H11.6V1.8H12.5C12.7387 1.8 12.9677 1.89482 13.1364 2.0636C13.3052 2.23239 13.4 2.46131 13.4 2.7V13.5Z"
      fill={props.color}
    />
  </Icon>
);

export default BooksIcon;