import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SignIn = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleUsernameChange}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('CreateAccountPage')}>
        <Text style={styles.createAccountButtonText}>Create an account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Signintrouble}
        onPress={() => navigation.navigate('SignInProblem')}>
        <Text style={styles.Signintrouble}>Can't sign in?</Text>
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
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  createAccountButton: {
    marginTop: 150,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  Signintrouble: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  createAccountButtonText: {
    color: '#333',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default SignIn;
