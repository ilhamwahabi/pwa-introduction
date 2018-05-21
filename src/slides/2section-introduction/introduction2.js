import React from 'react'

import {
  Slide,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="purple">
    <Appear order="1">        
      <Heading lineHeight={2} textColor="primary" size={1} fit bold>
        Progressive Web App atau PWA
      </Heading>
    </Appear>
    <Appear order="2">    
      <Heading lineHeight={2} textColor="primary" size={1} fit bold>
        aplikasi web yang menggunakan teknologi modern
      </Heading>
    </Appear>
    <Appear order="3">    
      <Heading lineHeight={2} textColor="primary" size={1} fit bold>
        membuat user experience layaknya Native App
      </Heading>
    </Appear>
  </Slide>
)