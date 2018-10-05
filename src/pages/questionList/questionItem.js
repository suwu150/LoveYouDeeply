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
  constructor(props) {
    super(props);
    this.state = {
      questions: props.questions
    };
  }

  componentWillReceiveProps(nextProps) {
    const { questions } = nextProps;
    if (questions.length !== this.state.questions.length) {
      this.setState({
        questions
      });
    }
  }

  _renderRow = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, height: 30 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{item.id}</Text>
          <Text>  {item.name}</Text>
        </View>
        <View>
          <Text>{item.score}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { questions } = this.state;
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
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
