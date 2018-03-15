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
      Sekian
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Terima Kasih!
      </Heading>
    </Appear>
  </Slide>
)