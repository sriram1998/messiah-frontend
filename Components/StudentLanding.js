import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
// import { Card, Title, Paragraph } from 'react-native-paper';
import { Card } from 'react-native-shadow-cards';
import { _retrieveData } from '../config/localstorage';


export default class StudentLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "...",
      rollNum: "...",
      mess: "..."
    }
  }


  componentDidMount() {
    _retrieveData("name")
      .then(val => {
        console.log(val);
        this.setState({ name: val })
      })
      .catch(err => console.log(err));


    _retrieveData("rollNum")
      .then(val => this.setState({ rollNum: val }))
      .catch(err => console.log(err));


    _retrieveData("mess")
      .then(val => this.setState({ mess: val }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <ImageBackground style={styles.bg} source={require("../assets/Wallpaper.jpg")}>
     
      <View style={{ flex: 1, backgroundColor: '#DCDCDC', flexDirection: 'column' }}>
        <View style={styles.container}>
          <Card style={{ padding: 50, margin: 10 }}>
            <Text style={{ textAlign: 'center' }}>{this.state.name}</Text>
            <Text style={{ textAlign: 'center' }}>{this.state.rollNum}</Text>
            <Text style={{ textAlign: 'center' }}>{this.state.mess}</Text>
          </Card>
        </View>
        <View style={styles.actioncontainer}>
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#BADA55' title="New Task" onPress={() => this.props.navigation.navigate('Dashboard')}>
              <IconMaterial name="dashboard" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#7fe5f0' title="New Task" onPress={() => this.props.navigation.navigate('Menu')}>
              <IconMaterialCommunityIcons name="food" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#40e0d0' title="New Task" onPress={() => this.props.navigation.navigate('CheckIn')}>
              <IconMaterialCommunityIcons name="account-check" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#003366' title="New Task" onPress={() => this.props.navigation.navigate('StudentLanding')}>
              <IconMaterialCommunityIcons name="food-off" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#00ff7f' title="New Task" onPress={() => this.props.navigation.navigate('FeedbackInput')}>
              <IconMaterial name="feedback" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
          {/* </View> */}
        </View>
      </View>
    
    </ImageBackground>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 30,
    height: 30,
    color: 'white',
  },
  container: {
    flex: 4,
    // backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    textAlign: 'center',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  actioncontainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
  // card: {
  //   // flex: 1,
  //   // backgroundColor='#DCDCDC',
  //   alignItems: 'center',
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   justifyContent: 'center',
  //   backgroundColor: '#DCDCDC',
  // },
});
