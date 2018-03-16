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
      <Quote textSize="4rem">Microsoft is planning to crawl and index Progressive Web Apps, convert them to APPX and make them searchable and browsable in the Store</Quote>
      <Cite>Mary Jo Foley</Cite>
    </BlockQuote>
  </Slide>
)

