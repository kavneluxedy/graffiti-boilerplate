import React /* Fragment */ from 'react';
import { render } from 'react-dom';
// import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import './App.css';
import App from './components/App';

// const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

render(<App />, document.getElementById('root'));
