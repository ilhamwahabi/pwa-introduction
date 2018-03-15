import React from 'react'

import {
  Slide,
  Heading,
  Text,
  Appear
} from 'spectacle'

export default (
  <Slide bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Handal
    </Heading>
    <Appear order="1">    
      <Text margin="0" textColor="primary" size={3} fit bold>
        Memungkinkan web/aplikasi diakses bahkan tanpa adanya jaringan
      </Text>
    </Appear>
  </Slide>
)