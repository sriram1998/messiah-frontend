import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import { Card } from 'react-native-shadow-cards';
import Dash from 'react-native-dash';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu1: "Fetching...",
      day1: "Fetching...",
      meal_type1: "Fetching...",
      menu2: "Fetching...",
      day2: "Fetching...",
      meal_type2: "Fetching...",
    };
  }
  UNSAFE_componentWillMount() {
    const data = { messID: 1, day: "mon", mealType: "breakfast" };
    axios({
      method: 'post',
      url: 'http://192.168.43.217:80/user/menu',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      data: data,
    })
      .then((response) => {
        // console.log(response);
        console.log(response);
        this.setState({
          menu1: response.data.menu
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <ImageBackground style={styles.bg} source={require("../assets/Wallpaper.jpg")}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{flex: 1}}></View>
        <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 0.5, flexDirection: "column" }}>
            <Text style={{ flex: 1 }}>{this.state.day1}</Text>
            <Text>{this.state.meal_type1}</Text>
          </View>
          <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
          <View style={{ flex: 1, padding: 10 }}>
            <Text>{this.state.meal1}</Text>
          </View>
        </Card>
        <View style={{flex: 1}}></View>
        <Card style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 0.5, flexDirection: "column" }}>
            <Text style={{ flex: 1 }}>{this.state.day2}</Text>
            <Text>{this.state.meal_type2}</Text>
          </View>
          <Dash style={{ width: 1, height: 100, flexDirection: 'column' }} />
          <View style={{ flex: 1, padding: 10 }}>
          <Text>{this.state.meal2}</Text>
          </View>
        </Card>
        <View style={{flex: 1}}></View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});