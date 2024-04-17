import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider } from './src/controllers/AuthContext';

import { PreLoad } from './src/screens/PreLoad';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';
import { Services } from './src/screens/Services';
import { SearchScreen } from './src/screens/SearchScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PreLoad" component={PreLoad} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <AuthProvider>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </AuthProvider>
  );
}
