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
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 15 }}>
        <View style={{ marginBottom: 20, height: 60, justifyContent: 'center', alignItems: 'center',
          borderBottomWidth: 1, borderColor: '#ffe5ed', width: '100%'
        }}
        >
          <Text style={{ fontSize: 20 }}>关于软件</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>该软件是一款情侣之间了解程度测试的软件，能够通过左滑右滑或者上滑进行加分减分，分值越大，则表示熟悉的程度越高。</Text>
        </View>
      </View>
    );
  }
}
