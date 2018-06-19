/**
 * Created by jkwu on 2018/6/18.
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StringDistinction from 'react-native-string-distinction';
import styleDict from '../../constants/styleDict';

export default class Home extends Component {
  _toContent = (gender) => {
    const { navigation } = this.props;
    navigation.navigate('Content', { gender });
  };

  render() {
    const itemWidth = styleDict.windowW / 2;
    const itemHeight = styleDict.windowH - 10;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, color: '#ffbbef' }}>选择主人公</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center',
          alignItems: 'center', flex: 1 }}
        >
          <TouchableOpacity onPress={() => this._toContent('male')}>
            <View style={{ flex: 1, width: itemWidth, height: itemHeight, backgroundColor: '#fcff81',
              justifyContent: 'center', alignItems: 'center'
            }}
            >
              <StringDistinction
                value={'我是男主'}
                delimiter={'男'}
                frontStyle={{ fontSize: 20, color: '#fd7251' }}
                delimiterStyle={{ fontSize: 30, color: '#92cbfd' }}
                behindStyle={{ fontSize: 26, color: '#fd7251' }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._toContent('female')}>
            <View style={{ flex: 1, width: itemWidth, height: itemHeight, backgroundColor: '#ffbbef',
              justifyContent: 'center', alignItems: 'center'
            }}
            >
              <StringDistinction
                value={'我是女主'}
                delimiter={'女'}
                frontStyle={{ fontSize: 20, color: '#fd7251' }}
                delimiterStyle={{ fontSize: 30, color: '#fd697d' }}
                behindStyle={{ fontSize: 26, color: '#fd7251' }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text>选择进入测试...</Text>
      </View>
    );
  }
}
