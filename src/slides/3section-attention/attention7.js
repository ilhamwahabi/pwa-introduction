import React from 'react'

import {
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="black">
    <Text margin="0 0 50px 0" textColor="white" size={1} fit bold>
      Tentu saja, seperti...
    </Text>
    <Layout>
      <Appear order="1">      
        <Fill>
          <Text margin="0 0 50px 0" textColor="white" textSize="4rem" bold>
            Twitter
          </Text>
        </Fill>
      </Appear>

      <Appear order="2">              
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="4rem" bold>
              Flipkart
            </Text>
        </Fill> 
      </Appear>

      <Appear order="3">      
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="4rem" bold>
              Forbes
            </Text>
        </Fill> 
      </Appear>
        
      <Appear order="4">      
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="4rem" bold>
              Alibaba
            </Text>
        </Fill> 
      </Appear>

    </Layout>

    <Layout>

      <Appear order="5">      
        <Fill>  
          <Text margin="0" textColor="white" textSize="4rem" bold>
            Trivago
          </Text>
        </Fill> 
      </Appear>

      <Appear order="6">      
        <Fill>  
          <Text margin="0" textColor="white" textSize="4rem" bold>
              Google
          </Text>
        </Fill> 
      </Appear>

      <Appear order="7">      
        <Fill>  
          <Text margin="0" textColor="white" textSize="4rem" bold>
            Babe
          </Text>
        </Fill> 
      </Appear>

      <Appear order="8">      
        <Fill>  
          <Text margin="0" textColor="white" textSize="4rem" bold>
            Jaka
          </Text>
        </Fill> 
      </Appear>

    </Layout>
  </Slide>
)