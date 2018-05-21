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
  <Slide transition={['fade']} bgColor="black">
    <Appear order="1">          
      <Heading textColor="white" fit bold lineHeight={2}>
        Tentu saja, seperti...
      </Heading>
    </Appear>
    <Layout>
      <Appear order="2">      
        <Fill>
          <Text textColor="white" bold>
            Twitter
          </Text>
        </Fill>
      </Appear>

      <Appear order="3">              
        <Fill>  
          <Text textColor="white" bold>
              Flipkart
            </Text>
        </Fill> 
      </Appear>

      <Appear order="4">      
        <Fill>  
          <Text textColor="white" bold>
              Forbes
            </Text>
        </Fill> 
      </Appear>

    </Layout>

    <Layout>
        
      <Appear order="5">      
        <Fill>  
          <Text textColor="white" bold>
              Alibaba
            </Text>
        </Fill> 
      </Appear>

      <Appear order="6">      
        <Fill>  
          <Text textColor="white" bold>
            Trivago
          </Text>
        </Fill> 
      </Appear>

      <Appear order="7">      
        <Fill>  
          <Text textColor="white" bold>
            Babe
          </Text>
        </Fill> 
      </Appear>

    </Layout>

    <Layout>

      <Appear order="8">      
        <Fill>  
          <Text margin="0" textColor="white" bold>
            Bukalapak
          </Text>
        </Fill> 
      </Appear>

      <Appear order="9">      
        <Fill>  
          <Text margin="0" textColor="white" bold>
            Traveloka
          </Text>
        </Fill> 
      </Appear>

      
      <Appear order="10">      
        <Fill>  
          <Text margin="0" textColor="white" bold>
            Google
          </Text>
        </Fill> 
      </Appear>

    </Layout>

  </Slide>
)