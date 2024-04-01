import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Data from './DataClass'; // Import the Data class from DataClass.js


const LoginPageComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignInPage')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="google" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="apple" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="facebook" size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="envelope" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('CreateAccountPage')}>
        <Text style={styles.createAccountButtonText}>Create an account</Text>
      </TouchableOpacity>
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

export default LoginPageComponent;
