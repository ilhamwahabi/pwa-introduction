// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
  Fill
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    orange: 'orange'
  },
  {
    primary: 'Open Sans Condensed',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            PWA
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} fit bold>
            Progressive Web App - The Introduction
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="orange">
          <Text margin="20px 0 0" textColor="primary" size={1} fit bold>
            Tunggu dulu! Apa itu Progressive Web App?
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Text margin="0" textColor="primary" size={3} fit bold>
            Progressive Web App atau PWA
          </Text>
          <Text margin="20px 0 50px 0" textColor="primary" size={6} fit bold>
            adalah teknologi web terbaru dari Google yang terdiri dari 3 komponen yaitu:
          </Text>
          <Layout>
            <Fill>
              <Text margin="0" textSize="3rem" textColor="primary" bold>
                Handal                
              </Text>
            </Fill>
            <Fill>
              <Text margin="0" textSize="3rem" textColor="primary" bold>
                Cepat                
              </Text>
            </Fill>
            <Fill>
              <Text margin="0" textSize="3rem" textColor="primary" bold>
                Menawan                
              </Text>
            </Fill>
          </Layout>
        </Slide>
        
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
