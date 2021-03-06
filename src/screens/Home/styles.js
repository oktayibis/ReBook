import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '5%',
    marginBottom: '3%',
  },
  body: {flex: 2.3, marginLeft: '5%'},
  footer: {flex: 4, marginLeft: '5%'},
  textStart: {
    color: '#FFAC81',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textEnd: {
    color: '#FF928B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  homeTop: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBottom: {
    flex: 4,
  },
});
