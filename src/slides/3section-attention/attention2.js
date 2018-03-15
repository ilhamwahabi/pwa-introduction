import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="orangered">
    <Text margin="20px 0 0" textColor="primary" size={1} fit bold>
      Website Anda harus berupa
    </Text>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        HTTPS
      </Heading>
    </Appear>
    <Appear order="2">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Dan harus responsif!
      </Heading>
    </Appear>
  </Slide>
)