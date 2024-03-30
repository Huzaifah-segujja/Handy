import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { CheckBox } from 'react-native-elements';

const CreateAccountPage = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [postcode, setPostcode] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>Logo</Text>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Email"
        onChangeText={(text) => setConfirmEmail(text)}
        value={confirmEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Create Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={!showPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={!showPassword}
      />
      <View style={styles.row}>
        <Text style={styles.showPasswordText}>Show Password</Text>
        <CheckBox value={showPassword} onValueChange={handleShowPassword} />
      </View>

      {/* TouchableOpacity with FontAwesome icon */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AccountPage2')}>
        <FontAwesome name="arrow-right" size={24} color="white" />
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
    marginBottom: 20,
  },
  Headings: {
    fontSize: 24,
    marginBottom: 20,
    top: 20, // Adjust top position as needed
    right: 100, // Align the picker to the right
  },
  Logo: {
    fontSize: 24,
    marginBottom: 150,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    right: 10,
  },
  smallInput: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    minWidth: 50, // Adjust width as needed
    alignItems: 'center',
    marginBottom: 20,
    right: -100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  showPasswordText: {
    marginRight: 10,
  },
  picker: {
    position: 'absolute', // Position the picker absolutely
    top: 120, // Adjust top position as needed
    right: 180, // Align the picker to the right
    height: '100%', // Match the height of the input
    width: 50, // Adjust width as needed
  },
});

export default CreateAccountPage;
