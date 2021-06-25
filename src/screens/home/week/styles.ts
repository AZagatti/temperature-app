import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    position: 'relative',
  },
  minMax: {
    flexDirection: 'row',
  },
  day: {
    fontSize: 16,
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    right: '40%',
    top: '30%',
  },
  min: {
    color: 'rgba(255,255,255,0.4)',
    marginLeft: 4,
  },
  max: {
    color: '#fff',
    marginRight: 4,
  },
})
