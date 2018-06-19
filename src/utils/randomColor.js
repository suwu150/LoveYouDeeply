/**
 * Created by jkwu on 2018/6/18.
 */

const colors = [
  '#FAFAD2',
  '#FFFAFA', '#FFFAF0', '#FFFACD', '#FFF8DC',
  '#FFF68F', '#FFF5EE', '#FFF0F5', '#FFEFDB',
  '#FFEFD5', '#FFEC8B', '#FFEBCD', '#FFE7BA',
  '#FFE4E1', '#FFE4C4', '#FFE4B5', '#FFE1FF',
  '#FFDEAD', '#FFDAB9', '#FFD700', '#FFD39B',
  '#FFC1C1', '#FFC125', '#FFC0CB', '#FFBBFF',
  '#EEEE00', '#EEE9E9', '#EEE9BF', '#EEE8CD',
  '#EEE8AA', '#EEE685', '#EEE5DE', '#EEE0E5',
  '#EEDFCC', '#EEDC82', '#EED8AE', '#EED5D2',
  '#EED5B7', '#EED2E3', '#EECFA1', '#EECBAD',
];

const randomColor = () => {
  const __id = parseInt(Math.random() * 40);
  return colors[__id];
};

export default randomColor;
