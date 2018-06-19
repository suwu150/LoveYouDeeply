/**
 * Created by jkwu on 2018/6/18.
 */

const colors = [
  { fontSize: 25, color: '#AAFFD2', textShadowOffset: { width: 3, height: 5 }, textShadowColor: 'black' },
  { fontSize: 34, color: '#FFFAF0', textShadowOffset: { width: 3, height: 5 }, textShadowColor: 'black' },
  { fontSize: 23, color: '#00FFCD', textShadowOffset: { width: 3, height: 5 }, textShadowColor: 'black' },
  { fontSize: 28, color: '#FAFAD2', textShadowOffset: { width: 3, height: 5 }, textShadowColor: 'black' },
  { fontSize: 33, color: '#EEE685', textShadowOffset: { width: 3, height: 5 }, textShadowColor: 'black' },
  { fontSize: 30, color: '#00CBEF', textShadowOffset: { width: 3, height: 5 }, textShadowColor: 'black' },
  { fontSize: 36, color: '#EECF0F', textShadowOffset: { width: 3, height: 5 }, textShadowColor: 'black' },
];

const randomStyle = () => {
  const __id = parseInt(Math.random() * 7);
  return colors[__id];
};

export default randomStyle;
