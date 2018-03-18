import React from 'react'

import {
  Slide,
  Text,
  Layout,
  Fill,
  Appear,
  Heading,
  Link
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
            <Link href="https://www.facebook.com/wahabi.putra">
              <Text margin="0" textSize="5rem" textColor="primary" bold>
                Facebook           
              </Text>
            </Link>
          </Fill>
        </Appear>
        <Appear order="3">        
          <Fill>
            <Link href="https://github.com/IlhamWahabiGX">
              <Text margin="0" textSize="5rem" textColor="primary" bold>
                Github               
              </Text>
            </Link>
          </Fill>
        </Appear>
        <Appear order="4">        
          <Fill>
            <Link href="https://www.linkedin.com/in/ilham-wahabi-aa1479131/">
              <Text margin="0" textSize="5rem" textColor="primary" bold>
                Linkedin                
              </Text>
            </Link>
          </Fill>
        </Appear>
      </Layout>
  </Slide>
)