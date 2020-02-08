import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import Checkin from './Components/Checkin';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Checkin" component={Checkin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
