/**
 * Created by jkwu on 2018/7/1.
 */
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>该软件是一款情侣之间了解程度测试的软件，能够通过左滑右滑或者上滑进行加分减分，分值越大，则表示熟悉的程度越高。</Text>
      </View>
    );
  }
}
