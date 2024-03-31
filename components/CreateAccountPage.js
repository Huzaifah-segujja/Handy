import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, TouchableHighlight, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

const CreateAccountPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordRequirements = () => {
    setShowPasswordRequirements(!showPasswordRequirements);
  };

  const handleSignUp = () => {
    // Validate password requirements
    const unmetRequirements = [];
    if (!isValidPassword(password)) {
      // Check each requirement and push the unmet ones to the array
      if (password.length < 8) {
        unmetRequirements.push('At least 8 characters');
      }
      if (password.length > 128) {
        unmetRequirements.push('No more than 128 characters');
      }
      if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        unmetRequirements.push('At least one uppercase and one lowercase letter');
      }
      if (!/\d/.test(password)) {
        unmetRequirements.push('At least one numeral');
      }
      if (/\s/.test(password)) {
        unmetRequirements.push('No spaces');
      }
      if (!isValidSpecialCharacter(password)) {
        unmetRequirements.push('Invalid special characters');
      }
      
      // Display alert with all unmet requirements
      if (unmetRequirements.length > 0) {
        Alert.alert('Error', `Your password does not meet the following requirements:\n${unmetRequirements.join('\n')}`);
        return;
      }
    }
    // Other sign-up logic
    navigation.navigate('AccountPage2');
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_+=(){}\[\]><\\/|\"~^#]).{8,128}$/;
    return passwordRegex.test(password);
  };

  const isValidSpecialCharacter = (password) => {
    const specialCharacterRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    return specialCharacterRegex.test(password);
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

      <View style={styles.passwordInput}>
        <TextInput
          style={[styles.input, styles.passwordInputText]}
          placeholder="Create Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={togglePasswordRequirements} style={{marginTop:-40, marginRight: -12}}>
          <FontAwesome name="question-circle" size={16} color="black" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={!showPassword}
      />

      <View style={styles.row}>
        <Text style={styles.showPasswordText}>Show Password</Text>
        <CheckBox
          checked={showPassword}
          onPress={handleShowPassword}
          checkedColor={showPassword ? 'blue' : '#007bff'}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <FontAwesome name="arrow-right" size={24} color="white" />
      </TouchableOpacity>

      {/* Password Requirements Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPasswordRequirements}
        onRequestClose={togglePasswordRequirements}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Your account password must meet the following requirements:
            </Text>
            <Text>- At least 8 characters</Text>
            <Text>- No more than 128 characters</Text>
            <Text>- At least one uppercase and one lowercase letter</Text>
            <Text>- At least one numeral</Text>
            <Text>- No spaces</Text>
            <Text>- Other valid characters: ~ ! ? @ # $ % ^ & * _ - + ( ) [ ] {'{'} {'}'} {'>'} {'<'} / \ | " </Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={togglePasswordRequirements}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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
  passwordInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  passwordInputText: {
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  showPasswordText: {
    marginRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CreateAccountPage;
