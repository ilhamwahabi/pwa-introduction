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
      <Quote textSize="4rem" >These apps aren’t packaged and deployed through stores, they’re just websites that took all the right vitamins… They progressively become ‘apps’.</Quote>
      <Cite>Alex Russell</Cite>
    </BlockQuote>
  </Slide>
)

