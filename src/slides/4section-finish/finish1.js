import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="teal">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Selanjutnya?
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Google akan mengembangkan
      </Heading>
    </Appear>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        PWA Desktop
      </Heading>
    </Appear>
  </Slide>
)