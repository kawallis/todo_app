import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  loggin: {
    height: 40,
    width: 250,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'white',
    marginTop: 4,
    textAlign: 'center'
  }
});

export default styles;