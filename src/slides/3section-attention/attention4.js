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
        TIDAK PERLU!
      </Heading>
    </Appear>
  </Slide>
)