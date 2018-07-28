import Home from './pages/home';
import Content from './pages/content';
import About from './pages/about';
import Instructions from './pages/instructions';
import QuestionAdd from './pages/questionAdd';
import QuestionList from './pages/questionList';

const stackConfig = {
  Home: { screen: Home },
  Content: { screen: Content },
  About: { screen: About },
  Instructions: { screen: Instructions },
  QuestionAdd: { screen: QuestionAdd },
  QuestionList: { screen: QuestionList },
};

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  navigationOptions: {
    headerBackTitle: null,
    headerTintColor: '#fff',
    title: '爱有多深',
    showIcon: true,
    swipeEnabled: false,
    animationEnabled: false,
    headerStyle: {
      backgroundColor: '#514b46',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#fff'
    }
  },
  mode: 'card',
  headerMode: 'float',
};

export {
  stackConfig,
  stackNavigatorConfig,
};
