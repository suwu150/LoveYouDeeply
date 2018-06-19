import { Dimensions } from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const _colorSet = {
  mainColor: '#fc933d',
  normalMainColor: '#514b46',
  fontColor: '#514b46',
  pageBackground: '#fff',
  lineColor: '#eae6e4',
  tabInacColor: '#999693',
};

const _fontSet = {
  bSize: 16,
  fsize: 14,
  mSize: 12,
  xSize: 10
};

const StyleDict = {
  colorSet: _colorSet,
  fontSet: _fontSet,
  windowW: WINDOW_WIDTH,
  windowH: WINDOW_HEIGHT
};

export default StyleDict;
