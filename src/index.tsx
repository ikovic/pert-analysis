import { injectGlobal } from 'emotion';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import withPertMachine from './containers/withPertMachine';

import { cssReset } from './styles';

// apply CSS reset
injectGlobal(cssReset);

const WrappedApp = withPertMachine(App);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
