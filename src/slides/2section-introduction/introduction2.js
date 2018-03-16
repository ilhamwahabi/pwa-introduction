import React from 'react'

import {
  Slide,
  Text,
  Layout,
  Fill,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="purple">
    <Text margin="0" textColor="primary" size={3} fit bold>
      Progressive Web App atau PWA
    </Text>
    <Appear order="1">    
      <Text margin="20px 0 0 0" textColor="primary" size={6} fit bold>
        aplikasi web yang menggunakan teknologi modern
      </Text>
    </Appear>
    <Appear order="1">    
      <Text margin="20px 0 50px 0" textColor="primary" size={6} fit bold>
        membuat user experience layaknya Native App
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