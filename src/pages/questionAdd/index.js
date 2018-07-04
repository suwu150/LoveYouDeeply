/**
 * Created by jkwu on 2018/7/1.
 */
import React, { Component } from 'react';
import {
  TextInput, Text,
  View,
} from 'react-native';
import Button from 'react-native-customer-button';

export default class index extends Component {
  _saveData = () => {

  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 20, height: 60, justifyContent: 'center', alignItems: 'center',
          borderBottomWidth: 1, borderColor: '#ffe5ed', width: '100%'
        }}
        >
          <Text style={{ fontSize: 20 }}>添加问题</Text>
        </View>
        <TextInput
          multiline
          placeholder="你是否知道ta最喜欢的食物"
          placeholderTextColor="#F0D0E9"
          style={{
            height: 200,
            padding: 5,
            borderColor: '#d697c6',
            borderWidth: 1
          }}
          numberOfLines={6}
        />
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}>
          <Button
            onPress={this._saveData}
            title="保存数据"
            color="#841584"
            style={{ backgroundColor: '#d697c6', borderRadius: 5, width: '80%' }}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}
