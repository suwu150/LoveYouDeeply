/**
 * Created by jkwu on 2018/7/1.
 */
import React, { Component } from 'react';
import {
  TextInput, Text, Picker,
  View, Alert
} from 'react-native';
import Button from 'react-native-customer-button';
import LocalKeyStore from '../../utils/storageUtil';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maleQuestions: [],
      femaleQuestions: [],
      textAreaValue: '',
      questionTo: 'male',
      score: '5',
    };
  }

  componentDidMount() {
    LocalKeyStore.getKey('maleQuestions', (error, maleQuestions) => {
      console.log('maleQuestions', maleQuestions);
      if (!error) {
        this.setState({ maleQuestions });
      }
    });
    LocalKeyStore.getKey('femaleQuestions', (error, femaleQuestions) => {
      console.log('maleQuestions', femaleQuestions);
      if (!error) {
        this.setState({ femaleQuestions });
      }
    });
  }

  _saveData = () => {
    const { score, questionTo, textAreaValue, maleQuestions, femaleQuestions } = this.state;
    if (!textAreaValue) return Alert.alert('问题内容不能为空');
    if (questionTo === 'male') {
      this.setState({
        maleQuestions: maleQuestions.concat({
          id: maleQuestions && maleQuestions.length + 1,
          name: textAreaValue,
          score
        })
      }, () => {
        LocalKeyStore.setKey('maleQuestions', this.state.maleQuestions, (error) => {
          if (error) {
            Alert.alert(error.message, '');
          } else {
            Alert.alert('保存成功', '');
          }
        });
      });
    } else {
      this.setState({
        femaleQuestions: femaleQuestions.concat({
          id: femaleQuestions && femaleQuestions.length + 1,
          name: textAreaValue,
          score
        })
      }, () => {
        LocalKeyStore.setKey('femaleQuestions', this.state.femaleQuestions, (error) => {
          if (error) {
            Alert.alert(error.message, '');
          } else {
            Alert.alert('保存成功', '');
          }
        });
      });
    }
  };

  _onChangeText = (value) => {
    this.setState({ textAreaValue: value });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 10, height: 30, justifyContent: 'center', alignItems: 'center',
          borderBottomWidth: 1, borderColor: '#ffe5ed', width: '100%'
        }}
        >
          <Text style={{ fontSize: 20 }}>添加问题</Text>
        </View>
        <TextInput
          multiline
          placeholder="你是否知道ta最喜欢的食物"
          placeholderTextColor="#F0D0E9"
          autoCorrect={false}
          autoCapitalize={'none'}
          underlineColorAndroid="transparent"
          style={{
            height: 150,
            padding: 5,
            borderColor: '#d697c6',
            borderWidth: 1,
            textAlignVertical: 'top'
          }}
          value={this.state.textAreaValue}
          onChangeText={this._onChangeText}
          numberOfLines={6}
        />
        <Picker
          selectedValue={this.state.questionTo}
          prompt="问题属性"
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({ questionTo: itemValue })}
        >
          <Picker.Item label="问男神" value="male" />
          <Picker.Item label="问女神" value="female" />
        </Picker>
        <Picker
          prompt="选择分值"
          selectedValue={this.state.score}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({ score: itemValue })}
        >
          <Picker.Item label="5" value="5" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="25" value="25" />
        </Picker>
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}>
          <Button
            onPress={this._saveData}
            title="保存数据"
            color="#841584"
            style={{ backgroundColor: '#d697c6', borderRadius: 5, width: '80%' }}
          />
        </View>
      </View>
    );
  }
}
