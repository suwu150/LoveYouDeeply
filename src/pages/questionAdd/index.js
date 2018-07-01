/**
 * Created by jkwu on 2018/7/1.
 */
import React, { Component } from 'react';
import {
  Button, TextInput,
  View,
} from 'react-native';

export default class index extends Component {
  _saveData = () => {

  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          multiline
          style={{
            height: 200,
            padding: 5,
            borderColor: '#d625d4',
            borderWidth: 1
          }}
          numberOfLines={6}
        />
        <Button
          onPress={this._saveData}
          title="保存数据"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
