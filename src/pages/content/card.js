import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styleDict from '../../constants/styleDict';
import randomColor from '../../utils/randomColor';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: styleDict.windowW,
    height: '60%',
    backgroundColor: '#e7ffb8'
  }
});

class Card extends React.PureComponent {
  render() {
    return (
      <View style={[styles.card, { backgroundColor: randomColor() }]}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default Card;
