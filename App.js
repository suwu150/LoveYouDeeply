/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/routerManager';

export default class App extends Component {
  constructor(props) {
    super(props);
    // if (Platform.OS === 'android') {
      // do anything while splash screen keeps, use await to wait for an async task.
      SplashScreen.hide(); // 关闭启动屏幕
    // }
  }
  render() {
    return (
      <Router {...this.props} />
    );
  }
}

