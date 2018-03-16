import React from 'react'

import {
  Slide,
  Heading,
  Text,
  Appear
} from 'spectacle'

export default (
  <Slide bgColor="red">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Semua aplikasinya merupakan
    </Heading>
    <Appear order="1">
      <Text margin="0" textColor="primary" size={3} fit bold>
        PWA
      </Text>
    </Appear>
  </Slide>
)