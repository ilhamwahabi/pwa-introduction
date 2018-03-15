import React from 'react'

import {
  Slide,
  Text,
  Layout,
  Fill,
  Appear,
  Heading
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="teal">
      <Text margin="20px 0 50px 0" textColor="primary" size={2} bold>
        Lets discuss!
      </Text>

      <Appear order="1">    
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Ilham Wahabi
        </Heading>
      </Appear>

    <Appear order="1">    
      <Text margin="20px 0 50px 0" textColor="primary" size={2} bold>
        Web Developer at ARC ITB
      </Text>
    </Appear>
      <Layout>
        <Appear order="2">
          <Fill>
            <Text margin="0" textSize="5rem" textColor="primary" bold>
              Facebook           
            </Text>
          </Fill>
        </Appear>
        <Appear order="3">        
          <Fill>
            <Text margin="0" textSize="5rem" textColor="primary" bold>
              Github               
            </Text>
          </Fill>
        </Appear>
        <Appear order="4">        
          <Fill>
            <Text margin="0" textSize="5rem" textColor="primary" bold>
              Linkedin                
            </Text>
          </Fill>
        </Appear>
      </Layout>
  </Slide>
)