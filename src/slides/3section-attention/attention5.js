import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="teal">
    <Appear order="1">  
      <Heading margin="0 0 30px 0" size={1} fit caps lineHeight={1} textColor="primary">
        PWA dapat diterapkan...
      </Heading>
    </Appear>
    <Appear order="2">
      <Text margin="0" textColor="primary" fill textSize="3rem" bold>
        Tanpa framework &#10004;
      </Text>  
    </Appear>
    
    <Appear order="3">
      <Text margin="0" textColor="primary" fill textSize="3rem" bold>
        Dengan framework &#10004;
      </Text>
    </Appear>
    
  </Slide>
)