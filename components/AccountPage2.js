import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput} from 'react-native';
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
       <Text style={styles.Headings}>{title || 'Please Select'}</Text> 
       
        <Picker
        selectedValue={title}
        style={[styles.input, styles.picker]}
        onValueChange={(itemValue) => setTitle(itemValue)}
      >
        <Picker.Item label="Mr" value="Mr" />
        <Picker.Item label="Mrs" value="Mrs" />
        <Picker.Item label="Miss" value="Miss" />
        <Picker.Item label="Ms" value="Ms" />
        <Picker.Item label="Dr" value="Dr" />
        <Picker.Item label="Prefer not to say" value="Prefer not to say" />
      </Picker>
        <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Day"
          onChangeText={(text) => setDay(text)}
          value={day}
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Month"
          onChangeText={(text) => setMonth(text)}
          value={month}
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Year"
          onChangeText={(text) => setYear(text)}
          value={year}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Postcode"
        onChangeText={(text) => setPostcode(text)}
        value={postcode}
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Find address</Text>
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
    minWidth: 200,
    alignItems: 'center',
    marginBottom: 20,
    right:65,
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
