import React from 'react'

import {
  Slide,
  Heading,
  Appear,
  Image
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="teal">
    <Appear order="1">  
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Contoh Teknologi yang Dipakai:
      </Heading>
    </Appear>
    <Appear order="2">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Service Workers
      </Heading>
    </Appear>
    <Appear order="3">
      <Image src="https://puu.sh/zIihe/5887f03595.png" />
    </Appear>
  </Slide>
)