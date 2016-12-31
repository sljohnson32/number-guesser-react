import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application';

require('./css/style.scss');

render(<Application/>, document.getElementById('application'));
