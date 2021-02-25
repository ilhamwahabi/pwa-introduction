import React from 'react';
import ReactDOM from 'react-dom';
import splitbee from '@splitbee/web';

import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';

splitbee.init()

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();
