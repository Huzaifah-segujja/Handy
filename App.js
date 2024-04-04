// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';

import LoginPage from './components/LoginPage';
import SignInPage from './components/SignInPage';
import CreateAccountPage from './components/CreateAccountPage';
import SignInProblem from './components/SignInProblem';
import AccountPage2 from './components/AccountPage2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" headerMode="none">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="CreateAccountPage" component={CreateAccountPage} />
        <Stack.Screen name="SignInProblem" component={SignInProblem} />
        <Stack.Screen name="AccountPage2" component={AccountPage2} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
