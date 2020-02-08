import React, { Component } from 'react';
import { Text, View, StyleSheet,ImageBackground, ScrollView} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Dash from 'react-native-dash';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: (<View></View>)
    }
  }


  componentDidMount() {
    axios({
      method: 'post',
      url: 'http://192.168.43.217:80/caterer/complaints',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      data: { messID: 1 },
    })
      .then(response => {
        this.state.content = (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {
              response.data.response.map((item, index) => (
                <Card key={index} style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
                  <Text>{item}</Text>
                </Card>
              ))
            }
          </View>
        );
        this.setState({
          content: this.state.content
        })
      })
      .catch(function (error) {
        Toast.show(error.message);
      });
  }


  render() {
    return (
      <ImageBackground style={styles.bg} source={require("../assets/Wallpaper.jpg")}>
     <ScrollView>
        {this.state.content}
      </ScrollView>
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
