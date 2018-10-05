/**
 * Created by jkwu on 2018/6/18.
 */
import React, { Component } from 'react';
import { Drawer, List } from 'antd-mobile-rn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import StringDistinction from 'react-native-string-distinction';
import styleDict from '../../constants/styleDict';
import LocalKeyStore from '../../utils/storageUtil';

import { maleQuestions, femaleQuestions } from '../../constants/questions';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: '',
      headerLeft: null,
      headerRight: (
        <TouchableOpacity
          onPress={() => {
            params && params.onOpenChange && params.onOpenChange();
          }}
        >
          <Ionicons name="md-more" size={28} color="#fff" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation && navigation.setParams({ onOpenChange: this._onOpenChange });
    LocalKeyStore.setKey('femaleQuestions', femaleQuestions, (error) => {
      if (error) {
        Alert.alert(error.message, '');
      } else {
        // Alert.alert('保存成功', '');
      }
    });
    LocalKeyStore.setKey('maleQuestions', maleQuestions, (error) => {
      if (error) {
        Alert.alert(error.message, '');
      } else {
        // Alert.alert('保存成功', '');
      }
    });
  }

  _onOpenChange = () => {
    this.setState({
      open: !this.state.open
    });
  };

  _toContent = (gender) => {
    const questionType = gender === 'male' ? 'maleQuestions' : 'femaleQuestions';
    LocalKeyStore.getKey(questionType, (error, questions) => {
      const { navigation } = this.props;
      if (!error) {
        navigation.navigate('Content', { gender, questions });
      }
    });
  };

  _onPress = (router) => {
    const { navigation } = this.props;
    navigation.navigate(router);
  };

  render() {
    const itemWidth = styleDict.windowW / 2;
    const itemHeight = styleDict.windowH - 10;

    const sidebarList = [
      <List.Item onClick={() => this._onPress('About')}><View><Text>关于软件</Text></View></List.Item>,
      <List.Item onClick={() => this._onPress('Instructions')}><View><Text>使用说明</Text></View></List.Item>,
      <List.Item onClick={() => this._onPress('QuestionAdd')}><View><Text>添加问题</Text></View></List.Item>,
      <List.Item onClick={() => this._onPress('QuestionList')}><View><Text>问题列表</Text></View></List.Item>,
      <List.Item onClick={() => this._onPress('Version')}><View><Text>版本 1.0</Text></View></List.Item>,
    ];
    return (
      <View style={{ flex: 1 }}>
        <Drawer
          enableDragHandle
          position="right"
          style={{ position: 'relative', height: styleDict.windowH }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={sidebarList}
          open={this.state.open}
          drawerWidth={styleDict.windowW / 2}
          drawerBackgroundColor="#fff"
          onOpenChange={this.onOpenChange}
        >
          <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: '#ffbbef' }}>选择主人公</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center',
            alignItems: 'center', height: 300 }}
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
        </Drawer>
      </View>
    );
  }
}
