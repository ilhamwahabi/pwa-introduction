import React from 'react'

import {
  Slide,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="orangered">
    <Appear order="1">  
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        OK. Kita sudah tahu tentang PWA, tapi...
      </Heading>
    </Appear>
    <Appear order="2">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Ada nggak
      </Heading>
    </Appear>
    <Appear order="3">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        yang sudah menggunakan???
      </Heading>
    </Appear>
  </Slide>
)