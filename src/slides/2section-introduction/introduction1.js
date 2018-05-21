import React from 'react'

import {
  Slide,
  Heading,
  Appear,
  Text
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="orangered">
    <Appear order="1">  
      <Heading margin="0" textColor="primary" caps fit bold>
        Apa itu 
      </Heading>
    </Appear>
    <Appear order="2">
      <Text margin="0" textColor="primary" fit bold>
        Progressive Web App?
      </Text>
    </Appear>
  </Slide>
)