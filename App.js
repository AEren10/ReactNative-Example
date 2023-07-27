import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome/Welcome';
import Meals from './pages/Meals/Meals';
import Detail from './pages/Details/Detail'


function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Categories" component={Welcome} />
            <Stack.Screen name="Meals" component={Meals} />
            <Stack.Screen name="Details" component={Detail} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}



export default App;