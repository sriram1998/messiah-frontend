import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './Components/Tab';
import Welcome from './Components/Welcome';
import Dashboard from './Components/Dashboard';
import StudentLanding from './Components/StudentLanding';
import CatererLanding from './Components/CatererLanding';
import Checkin from './Components/Checkin';
import CatererScanner from './Components/CatererScanner';
import FeedbackInput from './Components/FeedbackInput';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

import Menu from './Components/Menu';


const Stack = createStackNavigator();

function App() {
  return (
    <ImageBackground style={styles.container} source={require("./assets/Wallpaper.jpg")}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Tab} />
          <Stack.Screen name="Details" component={Welcome} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="StudentLanding" component={StudentLanding} />
          <Stack.Screen name="CatererLanding" component={CatererLanding} />
          <Stack.Screen name="CheckIn" component={Checkin} />
          <Stack.Screen name="CatererScanner" component={CatererScanner} />
          <Stack.Screen name="FeedbackInput" component={FeedbackInput} />
          {/* <Stack.Screen name="Details" component={Welcome} /> */}
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      height: '100%'
  }
});

export default App;
