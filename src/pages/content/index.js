/**
 * Created by jkwu on 2018/6/18.
 */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from './card';
import NoMoreCard from './noMoreCard';
import styleDict from '../../constants/styleDict';
import randomStyle from '../../utils/randomStyle';

export default class Home extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { params } = navigation.state;
    this.state = {
      gender: params.gender,
      questions: params.questions || [],
      totalScore: 0
    };
  }

  _handleYup = (card) => {
    // 右划-否
    console.log(`Yup for ${card.text}`);
    this.setState({
      totalScore: this.state.totalScore - card.score <= 0 ? 0 : this.state.totalScore - card.score
    });
  };

  _handleNope = (card) => {
    // 左划-是
    console.log(`Nope for ${card.text}`);
    this.setState({
      totalScore: this.state.totalScore + card.score
    });
  };

  _handleMaybe = (card) => {
    // 上划
    console.log(`Maybe for ${card.text}`);
    this.setState({
      totalScore: this.state.totalScore + (card.score / 2)
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <SwipeCards
            cards={this.state.questions}
            renderCard={(cardData) => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCard />}
            handleYup={this._handleYup}
            handleNope={this._handleNope}
            handleMaybe={this._handleMaybe}
            yupTextStyle={{ color: '#ff6559' }}
            yupText="否"
            yupStyle={{ borderColor: '#ff6559' }}
            nopeStyle={{ borderColor: '#3d7d29' }}
            nopeTextStyle={{ color: '#3d7d29' }}
            nopeText="是"
            maybeText="也许是吧"
            hasMaybeAction
          />
        </View>
        <Image
          source={require('../../assets/images/heart.jpg')}
          style={{ width: styleDict.windowW, height: 50, resizeMode: Image.resizeMode.stretch, opacity: 0.7 }}
        />
        <View style={{
          height: 150,
          width: styleDict.windowW,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.state.gender === 'male' ? '#ffe144' : '#ffa0c4'
        }}
        >
          <Text style={randomStyle()}>{this.state.totalScore}</Text>
        </View>
      </View>
    );
  }
}
