import React from 'react'

import {
  Slide,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="teal">
    <Appear order="1">  
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Selanjutnya Apa?
      </Heading>
    </Appear>
    <Appear order="2">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Google akan mengembangkan
      </Heading>
    </Appear>
    <Appear order="3">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        PWA Desktop
      </Heading>
    </Appear>
  </Slide>
)