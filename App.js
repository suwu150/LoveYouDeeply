/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Router from './src/routerManager';

export default class App extends Component {
  render() {
    return (
      <Router {...this.props} />
    );
  }
}

