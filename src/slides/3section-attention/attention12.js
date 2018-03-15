import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear,
  Image
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="teal">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Contoh Teknologi yang Dipakai:
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Web App Manifest
      </Heading>
    </Appear>
    <Appear order="1">
      <Image src="https://puu.sh/zIif3/31c0d34907.png" />
    </Appear>
  </Slide>
)