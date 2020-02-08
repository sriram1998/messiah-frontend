import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


class Welcome extends Component {
  render() {
    return (
      <ImageBackground style={styles.bg} source={require("../assets/Wallpaper.jpg")}>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});

export default Welcome;