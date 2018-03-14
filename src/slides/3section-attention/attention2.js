import React from 'react'

import {
  Slide,
  Text,
  Heading
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="orangered">
    <Text margin="20px 0 0" textColor="primary" size={1} fit bold>
      Website Anda harus berupa
    </Text>
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      HTTPS
    </Heading>
  </Slide>
)