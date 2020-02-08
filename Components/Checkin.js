import React, { Component } from 'react';
import QRCode from 'react-native-qrcode-image';
import { Buffer } from 'buffer';

global.Buffer = global.Buffer || require('buffer').Buffer

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';


function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}



export default class Checkin extends Component {
  state = {
    text: ""
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.text === "" ? <Button
          title={'Generate Qr'}
          style={styles.input}
          onPress={() => this.setState({text: makeid(10)})}
          color="#000000"
        /> : <View></View> }
        {
        this.state.text === "" ? <View></View> : <QRCode
          value={this.state.text}
          size={200}
          bgColor='#FFFFFF'
          fgColor='#000000' />
        }

      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  }
});
