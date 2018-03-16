import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear,
  Image
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="teal">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Contoh Teknologi yang Dipakai:
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Service Workers
      </Heading>
    </Appear>
    <Appear order="2">
      <Image src="https://puu.sh/zIihe/5887f03595.png" />
    </Appear>
  </Slide>
)