/**
 * Created by jkwu on 2018/7/1.
 */
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Instructions extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 15 }}>
        <View style={{ marginBottom: 20, height: 60, justifyContent: 'center', alignItems: 'center',
          borderBottomWidth: 1, borderColor: '#ffe5ed', width: '100%'
        }}
        >
          <Text style={{ fontSize: 20 }}>使用说明</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>在使用过程中，会出现问题，如果对于提出的问题你知道，就进行左滑，如果不知道，就进行右滑，如果不确定，就进行上滑(左滑选是,上滑也许是吧,右滑选否)。在合计处有最终分值</Text>
        </View>
      </View>
    );
  }
}
