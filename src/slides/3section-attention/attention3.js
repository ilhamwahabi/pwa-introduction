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
    <Text margin="0 0 50px 0" textColor="secondary" size={1} fit bold>
      Apakah harus menggunakan...
    </Text>
    <Layout>
      <Appear order="1">      
        <Fill>
          <Image src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png" />
        </Fill>
      </Appear>

      <Appear order="2">              
        <Fill>
          <Image src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/full/angular2.png" />
        </Fill>
      </Appear>

      <Appear order="3">      
        <Fill>
          <Image src="https://genesisui-static-dcklmia32ll.netdna-ssl.com/assets/img/logos/vue.svg" />
        </Fill>
      </Appear>
        
      <Appear order="4">      
        <Fill>
          <Image src="http://gregfranko.com/images/backbone.png" />
        </Fill>
      </Appear>

      <Appear order="5">      
        <Fill>
          <Image src="https://emberjs.com/images/tomster-sm.png" />
        </Fill>
      </Appear>
    </Layout>
  </Slide>
)