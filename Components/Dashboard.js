import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "Searching..."
    };
  }
  UNSAFE_componentWillMount() {
    let data = { messID: 1, day: "monday", mealType: "lunch" };

    // const apiConfig = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // };
    // console.log("user/menu/");
    // fetch("http://192.168.43.217:80/user/menu", apiConfig)
    //   .then(function(response) {
    //     console.log(response);
    //     // response.json().then(json => {
    //     //   console.log("hello");
    //     //   console.log(string(json));
    //     //   return json; //Gets cascaded to the next then block
    //     // }).catch(err => console.log("hey", err));
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    axios({
      method: 'post',
      url: 'http://192.168.43.217:80/user/menu',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{this.state.menu}</Text>
      </View>
    );
  }
}


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View> 
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//           <Text>At dashboard</Text>
//         </View>
//       </View>
//     );
//   }
// }