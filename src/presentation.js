// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Slide
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// import Introduction from './Introduction/introduction'

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    orange: 'orange',
    orangered: 'orangered',
    cyan: 'cyan',
    red: '#E23636'
  },
  {
    primary: 'Open Sans Condensed',
    secondary: 'Helvetica',
  }
);

const slidesImports = [
  import('./slides/1section-greeting/greeting1'),

  import('./slides/2section-introduction/introduction1'),
  import('./slides/2section-introduction/introduction2'),
  import('./slides/2section-introduction/introduction3'),
  import('./slides/2section-introduction/introduction4'),
  import('./slides/2section-introduction/introduction5'),
  // import('./slides/2section-introduction/introduction6'),
  // import('./slides/2section-introduction/introduction7'),

  import('./slides/3section-attention/attention1'),
  import('./slides/3section-attention/attention2'),
  import('./slides/3section-attention/attention3'),
  import('./slides/3section-attention/attention4'),
  import('./slides/3section-attention/attention5'),
  import('./slides/3section-attention/attention6'),
  import('./slides/3section-attention/attention7'),
  import('./slides/3section-attention/attention8'),
  import('./slides/3section-attention/attention9'),
  import('./slides/3section-attention/attention10'),
  import('./slides/3section-attention/attention11'),
  import('./slides/3section-attention/attention12'),
  import('./slides/3section-attention/attention13'),

  import('./slides/4section-finish/finish1'),  
  import('./slides/4section-finish/finish2'),  
  import('./slides/4section-finish/finish7'),      
  import('./slides/4section-finish/finish9'),      
  import('./slides/4section-finish/finish3'),  
  import('./slides/4section-finish/finish6'),    
  import('./slides/4section-finish/finish5'),  
  import('./slides/4section-finish/finish8'),    
  import('./slides/4section-finish/finish4'),    
]

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["zoom", "slide"]} progress="bar" transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, {key: index});
          })
        }
      </Deck>
    );
  }
}