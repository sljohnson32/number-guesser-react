import React from 'react';
import { render } from 'react-dom';

import Application from './components/application';

require('./css/style.scss');

render(<Application />, document.getElementById('application'));
