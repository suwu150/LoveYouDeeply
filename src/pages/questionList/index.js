/**
 * Created by jkwu on 2018/7/28.
 */
import React, { Component } from 'react';
import { Tabs } from 'antd-mobile-rn';
import QuestionItem from './questionItem';
import LocalKeyStore from '../../utils/storageUtil';

const tabs = [
  { title: '问男生问题', sub: '1' },
  { title: '问女生问题', sub: '2' },
];

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maleQuestions: [],
      femaleQuestions: []
    };
  }

  componentDidMount() {
    LocalKeyStore.getKey('maleQuestions', (error, maleQuestions) => {
      if (!error) {
        this.setState({ maleQuestions });
      }
    });
    LocalKeyStore.getKey('femaleQuestions', (error, femaleQuestions) => {
      if (!error) {
        this.setState({ femaleQuestions });
      }
    });
  }

  render() {
    return (
      <Tabs
        tabs={tabs}
        initialPage={'1'}
        useOnPan={false}
        animated={false}
        swipeable={false}
        usePaged
        prerenderingSiblingsNumber={3}
        // tabBarBackgroundColor={styleDict.colorSet.pageBackground}
        // tabBarActiveTextColor={styleDict.colorSet.mainColor}
        // tabBarInactiveTextColor={styleDict.colorSet.fontColor}
        // tabBarTextStyle={{ fontSize: styleDict.fontSet.mSize }}
        // tabBarUnderlineStyle={{ backgroundColor: styleDict.colorSet.mainColor }}
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} animated={false} />}
      >
        <QuestionItem questions={this.state.maleQuestions} />
        <QuestionItem questions={this.state.femaleQuestions} />
      </Tabs>
    );
  }
}
