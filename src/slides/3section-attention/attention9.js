import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="orangered">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      OK. PWA itu menarik
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Tapi apa
      </Heading>
    </Appear>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        udah didukung banyak browser?
      </Heading>
    </Appear>
  </Slide>
)