import React from 'react'

import {
  Slide,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="purple">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Tunggu sebentar!
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Pertanyaan Anda
      </Heading>
    </Appear>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Kurang tepat
      </Heading>
    </Appear>
  </Slide>
)