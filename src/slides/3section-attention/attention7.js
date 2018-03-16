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
          <Text margin="0 0 50px 0" textColor="white" textSize="3rem" bold>
            Twitter
          </Text>
        </Fill>
      </Appear>

      <Appear order="2">              
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="3rem" bold>
              Flipkart
            </Text>
        </Fill> 
      </Appear>

      <Appear order="3">      
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="3rem" bold>
              Forbes
            </Text>
        </Fill> 
      </Appear>
        
      <Appear order="4">      
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="3rem" bold>
              Alibaba
            </Text>
        </Fill> 
      </Appear>

    </Layout>

    <Layout>

      <Appear order="5">      
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="3rem" bold>
            Trivago
          </Text>
        </Fill> 
      </Appear>

      <Appear order="6">      
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="3rem" bold>
              Google
          </Text>
        </Fill> 
      </Appear>

      <Appear order="7">      
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="3rem" bold>
            Telegram
          </Text>
        </Fill> 
      </Appear>

      <Appear order="8">      
        <Fill>  
          <Text margin="0 0 50px 0" textColor="white" textSize="3rem" bold>
            Babe
          </Text>
        </Fill> 
      </Appear>

    </Layout>

    
    <Layout>

      <Appear order="9">      
        <Fill>  
          <Text margin="0" textColor="white" textSize="3rem" bold>
            Bukalapak
          </Text>
        </Fill> 
      </Appear>

      <Appear order="10">      
        <Fill>  
          <Text margin="0" textColor="white" textSize="3rem" bold>
            Tokopedia
          </Text>
        </Fill> 
      </Appear>

      <Appear order="11">      
        <Fill>  
          <Text margin="0" textColor="white" textSize="3rem" bold>
            Traveloka
          </Text>
        </Fill> 
      </Appear>

      <Appear order="12">      
        <Fill>  
          <Text margin="0" textColor="white" textSize="3rem" bold>
            Jalan Tikus
          </Text>
        </Fill> 
      </Appear>

    </Layout>
  </Slide>
)