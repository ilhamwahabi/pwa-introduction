import React from 'react'

import {
  Slide,
  Text,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="orangered">
    <Text margin="20px 0 0" textColor="primary" size={1} fit bold>
      Tapi ingat! 
    </Text>
    <Appear order="1">
      <Text margin="30px 0 0" textColor="primary" size={1} fit bold>
        Ada 1 syarat wajib jika menggunakan PWA
      </Text>
    </Appear>
  </Slide>
)