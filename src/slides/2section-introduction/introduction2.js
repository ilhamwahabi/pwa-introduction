import React from 'react'

import {
  Slide,
  Text,
  Layout,
  Fill
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="tertiary">
    <Text margin="0" textColor="primary" size={3} fit bold>
      Progressive Web App atau PWA
    </Text>
    <Text margin="20px 0 50px 0" textColor="primary" size={6} fit bold>
      adalah teknologi web terbaru dari Google yang terdiri dari 3 komponen yaitu:
    </Text>
    <Layout>
      <Fill>
        <Text margin="0" textSize="4rem" textColor="primary" bold>
          Handal                
        </Text>
      </Fill>
      <Fill>
        <Text margin="0" textSize="4rem" textColor="primary" bold>
          Cepat                
        </Text>
      </Fill>
      <Fill>
        <Text margin="0" textSize="4rem" textColor="primary" bold>
          Menawan                
        </Text>
      </Fill>
    </Layout>
  </Slide>
)