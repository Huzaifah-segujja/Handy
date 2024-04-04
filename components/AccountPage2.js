import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome } from '@expo/vector-icons';
import Data from './DataClass'; 
const CreateAccountPage = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [countryCode, setCountryCode] = useState('+44'); // Default country code
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryLabel, setSelectedCountryLabel] = useState('+44 UK');

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const handlePhoneNumberChange = (text) => {
    // Remove non-digit characters from the input
    const cleanedPhoneNumber = text.replace(/\D/g, '');
    setPhoneNumber(cleanedPhoneNumber);
  };

  const handleSignUp = () => {
    // Validate phone number
    if (phoneNumber.length !== 10) {
      Alert.alert('Error', 'Phone number must be 10 digits');
      return;
    }

    // Update Data object with the entered information
    Data.Title = title;
    Data.FirstName = firstName;
    Data.LastName = lastName;
    Data.PostCode = postcode;
    Data.dob = selectedDate.toLocaleDateString(); // Assuming selectedDate is a Date object
    Data.PhoneNo = phoneNumber;
    Data.CountryCode = countryCode;

    // Log the updated data
    console.log('Updated Data:', Data);

    // Other sign-up logic
    navigation.navigate('MainPage.js');
  };

  const handleCountryCodeChange = (value) => {
    setCountryCode(value);
    setSelectedCountryLabel(value === '+44' ? '+44 UK' : '+353 IE');
  };

  const validateNameInput = (text, fieldName) => {
    // Check if the input contains numerical characters
    if (/\d/.test(text)) {
      Alert.alert('Error', `${fieldName} cannot contain numerical characters`);
      return false;
    }
    return true;
  };

  const handleFirstNameChange = (text) => {
    // Validate first name
    if (validateNameInput(text, 'First name')) {
      setFirstName(text);
    }
  };

  const handleLastNameChange = (text) => {
    // Validate last name
    if (validateNameInput(text, 'Last name')) {
      setLastName(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>Logo</Text>
      <Text style={styles.title}>Additional Info</Text>
      <Text style={styles.Headings}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={handleFirstNameChange}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={handleLastNameChange}
        value={lastName}
      />

      <TouchableOpacity
        style={[styles.input, styles.datePicker]}
        onPress={() => setShowDatePicker(true)}>
        <Text>{selectedDate.toDateString()}</Text>
      </TouchableOpacity>

      {/* Display DateTimePicker */}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Country Code and Phone Number */}
      <View style={styles.row}>
        <RNPickerSelect
          placeholder={{ label: 'Select Country', value: null }}
          items={[
            { label: '+44 UK', value: '+44' },
            { label: '+353 IE', value: '+353' },
          ]}
          onValueChange={handleCountryCodeChange}
          style={{ ...pickerSelectStyles, width: '40%', marginRight: 10 }}
          value={countryCode}
          useNativeAndroidPickerStyle={false}
        />
        <TextInput
          style={[styles.input, styles.phoneNumberInput, { width: '50%' }]}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
        />
      </View>

      {/* Postcode Input */}
      <TextInput
        style={styles.input}
        placeholder="Postcode"
        onChangeText={(text) => setPostcode(text)}
        value={postcode}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Find address</Text>
      </TouchableOpacity>

      {/* Arrow Button */}
      <TouchableOpacity style={styles.arrowButton} onPress={handleSignUp}>
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
    right: 140, // Align the picker to the right
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
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    minWidth: 200,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  datePicker: {
    justifyContent: 'center',
  },
  countryCodePicker: {
    flex: 1,
    marginRight: 10,
  },
  phoneNumberInput: {
    flex: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 50,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default CreateAccountPage;
