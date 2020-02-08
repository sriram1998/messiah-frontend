import React, { Component } from 'react';
import { Text, View, ImageBackground , StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <ImageBackground style={styles.bg} source={require("../assets/Wallpaper.jpg")}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Meal skips</Text>
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
