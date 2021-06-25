import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 32,
    paddingVertical: 32,
    flexDirection: 'row',
  },
  section: {
    width: '50%',
    justifyContent: 'space-between',
  },
  sunSection: {
    marginLeft: '25%',
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: '#fff',
  },
  temperatureContainer: {
    width: '100%',
  },
  temperature: {
    fontSize: 58,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 58,
  },
  minMax: {
    width: '100%',
    flexDirection: 'row',
  },
  buttonCity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: {
    marginLeft: 8,
  },
})
