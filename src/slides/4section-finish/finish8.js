import React from 'react'

import {
  Slide,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="red">
    <Appear order="1">  
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Presentasi ini
      </Heading>
    </Appear>
    <Appear order="2">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        dipersilakan dipakai bebas
      </Heading>
    </Appear>
    <Appear order="3">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        maupun disebarluaskan
      </Heading>
    </Appear>
  </Slide>
)