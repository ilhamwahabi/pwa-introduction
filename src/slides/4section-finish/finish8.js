import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="red">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Presentasi ini
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        dipersilakan dipakai bebas
      </Heading>
    </Appear>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        maupun disebarluaskan
      </Heading>
    </Appear>
  </Slide>
)