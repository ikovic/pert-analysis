import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <p>Test</p>;

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactDOM.render(<App />, document.getElementById('root'));
