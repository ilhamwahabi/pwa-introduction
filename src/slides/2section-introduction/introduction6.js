import React from 'react'

import {
  Slide,
  Heading,
  Text,
  Appear
} from 'spectacle'

export default (
  <Slide bgColor="purple">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Apa kalian tahu Sistem Operasi
    </Heading>
    <Appear order="1">
      <Text margin="0" textColor="primary" size={3} caps fit bold>
        Android GO?
      </Text>
    </Appear>
  </Slide>
)