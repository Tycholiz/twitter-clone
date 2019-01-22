import React from 'react';
import styles from './App.css';

import Header from './components/Header'
import Main from './components/Main'


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}
