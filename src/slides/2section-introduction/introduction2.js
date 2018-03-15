import React from 'react'

import {
  Slide,
  Text,
  Layout,
  Fill,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="tertiary">
    <Text margin="0" textColor="primary" size={3} fit bold>
      Progressive Web App atau PWA
    </Text>
    <Appear order="1">    
      <Text margin="20px 0 50px 0" textColor="primary" size={6} fit bold>
        adalah teknologi web terbaru dari Google yang terdiri dari 3 komponen yaitu:
      </Text>
    </Appear>
      <Layout>
        <Appear order="2">
          <Fill>
            <Text margin="0" textSize="5rem" textColor="primary" bold>
              Handal                
            </Text>
          </Fill>
        </Appear>
        <Appear order="3">        
          <Fill>
            <Text margin="0" textSize="5rem" textColor="primary" bold>
              Cepat                
            </Text>
          </Fill>
        </Appear>
        <Appear order="4">        
          <Fill>
            <Text margin="0" textSize="5rem" textColor="primary" bold>
              Menawan                
            </Text>
          </Fill>
        </Appear>
      </Layout>
  </Slide>
)