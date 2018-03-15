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
    <Text margin="20px 0 0" textColor="primary" size={1} fit bold>
    </Text>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Tools khusus dalam pengembangan PWA
      </Heading>
    </Appear>
    <Appear order="2">    
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Lighthouse
      </Heading>
    </Appear>
    <Appear order="3">
      <Image src="https://developers.google.com/web/progressive-web-apps/images/pwa-lighthouse.png" />
    </Appear>
  </Slide>
)