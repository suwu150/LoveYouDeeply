import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import styleDict from '../../constants/styleDict';

const styles = StyleSheet.create({
  noMoreCard: {
    flex: 1,
    backgroundColor: '#e7ffb8',
    width: styleDict.windowW,
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class NoMoreCard extends PureComponent {
  render() {
    return (
      <View style={styles.noMoreCard}>
        <Text style={styles.noMoreCardText}>没有更多的选项</Text>
      </View>
    );
  }
}
export default NoMoreCard;
