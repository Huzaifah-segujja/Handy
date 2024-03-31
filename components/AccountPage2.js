import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CreateAccountPage = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
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
    // Other sign-up logic
    navigation.navigate('AccountPage2');
  };

  const handleCountryCodeChange = (itemValue, itemIndex) => {
    setCountryCode(itemValue);
    setSelectedCountryLabel(itemIndex === 0 ? '+44 UK' : '+353 IE');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>Logo</Text>
      <Text style={styles.title}>Additional Info</Text>
      <Text style={styles.Headings}>Title</Text>
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

      <TouchableOpacity
        style={[styles.input, styles.datePicker]}
        onPress={() => setShowDatePicker(true)}>
        <Text>{selectedDate ? selectedDate.toDateString() : 'Date of Birth'}</Text>
      </TouchableOpacity>

      {/* Country Code and Phone Number */}
      <View style={styles.row}>
        <Picker
          selectedValue={countryCode}
          style={[styles.input, styles.countryCodePicker]}
          onValueChange={handleCountryCodeChange}
        >
          <Picker.Item label="+44 UK" value="+44" />
          <Picker.Item label="+353 IE" value="+353" />
        </Picker>
        <TextInput
          style={[styles.input, styles.phoneNumberInput]}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Postcode"
        onChangeText={(text) => setPostcode(text)}
        value={postcode}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
});

export default CreateAccountPage;
