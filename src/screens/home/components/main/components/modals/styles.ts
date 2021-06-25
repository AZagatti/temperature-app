import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  label: {
    marginVertical: 8,
    fontSize: 16,
    color: '#fff',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.62)',
  },
  input: {
    color: '#333',
    height: 64,
    width: '100%',
    fontSize: 16,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
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
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  centeredView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
