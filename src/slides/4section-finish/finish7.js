import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="red">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Dan apa kalian tahu?
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Presentasi Ini
      </Heading>
    </Appear>
    <Appear order="2">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Juga Memakai PWA :)
      </Heading>
    </Appear>
  </Slide>
)