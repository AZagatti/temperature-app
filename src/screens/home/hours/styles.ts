import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    marginVertical: 16,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomWidth: 1,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 8,
  },
})
