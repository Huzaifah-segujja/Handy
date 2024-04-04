import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';





const MainPageComponent = ({ navigation }) => {
  return (
     <View style={styles.container}>


     </View>

    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 200,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  icon: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 50,
    marginTop: 50,
  },
  createAccountButton: {
    marginTop: 150,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  createAccountButtonText: {
    color: '#333',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default MainPageComponent;
