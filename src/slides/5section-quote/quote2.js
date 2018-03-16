import React from 'react'

import {
  Slide,
  BlockQuote,
  Quote,
  Cite
} from 'spectacle'

export default (
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <BlockQuote>
      <Quote textSize="3rem">Twitter Lite is now the fastest, least expensive, and most reliable way to use Twitter. The web app rivals the performance of our native apps but requires less than 3% of the device storage space compared to Twitter for Android.</Quote>
      <Cite>Nicolas Gallagher, the Engineering Lead for Twitter Lite</Cite>
    </BlockQuote>
  </Slide>
)

