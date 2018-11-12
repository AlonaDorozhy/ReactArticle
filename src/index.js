import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));


serviceWorker.unregister();
