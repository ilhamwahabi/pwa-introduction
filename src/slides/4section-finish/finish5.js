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
  <Slide transition={['fade']} bgColor="white">
    <Text margin="0 0 50px 0" textColor="black" size={1} fit bold>
      Referensi Belajar PWA
    </Text>
    <Layout>
      <Appear order="1">      
        <Fill>
          <Text margin="0 0 50px 0" textColor="black" textSize="2rem" bold>
            Google Developers Website
          </Text>
        </Fill>
      </Appear>

      <Appear order="2">              
        <Fill>  
          <Text margin="0 0 50px 0" textColor="black" textSize="2rem" bold>
            Google Developers Channel
          </Text>
        </Fill> 
      </Appear>
    </Layout>
  </Slide>
)


// <Appear order="3">      
// <Fill>  
//   <Text margin="0 0 50px 0" textColor="white" textSize="4rem" bold>
//     Forbes
//   </Text>
// </Fill> 
// </Appear>

// <Appear order="4">      
// <Fill>  
//   <Text margin="0 0 50px 0" textColor="white" textSize="4rem" bold>
//       Alibaba
//     </Text>
// </Fill> 
// </Appear>

// <Appear order="7">      
// <Fill>  
//   <Text margin="0" textColor="white" textSize="4rem" bold>
    
//   </Text>
// </Fill> 
// </Appear>

// <Appear order="8">      
// <Fill>  
//   <Text margin="0" textColor="white" textSize="4rem" bold>
//     Jaka
//   </Text>
// </Fill> 
// </Appear>

// <Layout>

// <Appear order="5">      
//   <Fill>  
//     <Text margin="0" textColor="white" textSize="4rem" bold>
//       Udemy
//     </Text>
//   </Fill> 
// </Appear>

// <Appear order="6">      
//   <Fill>  
//     <Text margin="0" textColor="white" textSize="4rem" bold>
//       Udacity
//     </Text>
//   </Fill> 
// </Appear>

// </Layout>