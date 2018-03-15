import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="purple">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Perkembangan PWA
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Di Indonesia
      </Heading>
    </Appear>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Semakin meningkat!
      </Heading>
    </Appear>
  </Slide>
)