/**
 * Created by jkwu on 2018/7/28.
 */
import React from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';

class QuestionItem extends React.Component {
  _renderRow = (item) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
        </View>
        <View>
          <Text>{item.score}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { questions } = this.props;
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        style={{ flex: 1 }}
        {...this.props}
        data={questions}
        initialNumToRender={questions.length}
        extraData={this.state}
        renderItem={this._renderRow}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

export default QuestionItem;
