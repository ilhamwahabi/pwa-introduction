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
        PWA itu
      </Heading>
    </Appear>
    <Appear order="2">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Tersusun dari banyak teknologi
      </Heading>
    </Appear>
    <Appear order="3">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Beda teknologi
      </Heading>
    </Appear>
    <Appear order="4">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Beda dukungan
      </Heading>
    </Appear>
  </Slide>
)