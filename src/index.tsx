import { injectGlobal } from 'emotion';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'react-emotion';

import { cssReset } from './styles';

// apply CSS reset
injectGlobal(cssReset);

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
`;

const App = () => (
  <Content>
    <h1>Test</h1>
  </Content>
);

ReactDOM.render(<App />, document.getElementById('root'));
