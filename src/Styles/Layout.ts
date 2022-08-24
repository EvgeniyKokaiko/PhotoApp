import { StyleSheet } from 'react-native';

export const Layout = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex_row: {
    flexDirection: 'row',
  },
  jc_sb: {
    justifyContent: 'space-between',
  },
  jc_sa: {
    justifyContent: 'space-around',
  },
  jc_fe: {
    justifyContent: 'flex-end',
  },
  ai_c: {
    alignItems: 'center',
  },
  wh100: {
    width: '100%',
    height: '100%',
  },
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
  rm_c: {
    resizeMode: 'contain',
  },
});
