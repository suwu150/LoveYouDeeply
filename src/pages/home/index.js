/**
 * Created by jkwu on 2018/6/18.
 */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const style = StyleSheet({
  top: {
    flex: 1,
  },
  center: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  }
});

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>{'question'}</View>
        <View>{'button'}</View>
        <View>{'result'}</View>
      </View>
    );
  }
}
