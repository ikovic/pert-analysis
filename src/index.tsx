import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'react-emotion';

const Content = styled.div`
  width: 100%;
  margin: 24px;
`;

const App = () => (
  <Content>
    <h1>Test</h1>
  </Content>
);

ReactDOM.render(<App />, document.getElementById('root'));
