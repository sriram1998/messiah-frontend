import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './Components/Tab';
import Welcome from './Components/Welcome';
import Dashboard from './Components/Dashboard';
import StudentLanding from './Components/StudentLanding';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen name="Login" component={Tab} />
        <Stack.Screen name="Details" component={Welcome} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="StudentLanding" component={StudentLanding} />        
        {/* <Stack.Screen name="Details" component={Welcome} />
        <Stack.Screen name="Details" component={Welcome} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
