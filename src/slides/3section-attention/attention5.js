import React from 'react'

import {
  Slide,
  Text,
  Heading
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="teal">
    <Heading margin="0 0 30px 0" size={1} fit caps lineHeight={1} textColor="primary">
      PWA dapat diterapkan...
    </Heading>
    <Text margin="0" textColor="primary" textSize="5rem" bold>
      Tanpa framework &#10004;
    </Text>
    <Text margin="0" textColor="primary" textSize="5rem" bold>
      Dengan framework &#10004;
    </Text>
  </Slide>
)