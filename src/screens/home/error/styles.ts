import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginTop: 16,
    marginBottom: 48,
  },
  button: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#E45C8A',
    marginVertical: 16,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 18,
  },
})
