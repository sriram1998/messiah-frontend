import * as React from 'react';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Alert, Button, TextInput, View, StyleSheet, AsyncStorage,ImageBackground} from 'react-native';
import {_storeData, _retrieveData} from '../config/localstorage'
import Toast from 'react-native-simple-toast';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state;
    this.props.navigation.navigate('StudentLanding');
    if(username.length<5) {
      Toast.show('Username too short');
      return;
    }
    if(password.length<5) {
      Toast.show('Password too short');
      return;
    }
    // axios({
    //   method: 'post',
    //   url: 'http://192.168.43.217:80/user/login',
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //   },
    //   data: {roll: username, password: password},
    // })
    // .then(response => {
    //   console.log(response.data);
    //   _storeData("mess", response.data.mess);
    //   _storeData("name", response.data.name);
    //   _storeData("rollNum", response.data.rollNum);
    //   this.props.navigation.navigate('CatererLanding');
    // })
    // .catch(function (error) {
    //   Toast.show(error.message);
    // });
  }

  render() {

    return (
      <ImageBackground style={styles.bg} source={require("../assets/Wallpaper.jpg")}>
      <View style={styles.container}>
        <View style={styles.fieldcontainer}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          />
          <IconAntDesign name='user' size={20} style={styles.icon}/> 
        </View>

        <View style={styles.fieldcontainer}>
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Messname'}
            // secureTextEntry={true}
            style={styles.input}
          />
          <IconMaterialCommunityIcons name='food-fork-drink' size={20} style={styles.icon} />
        </View>

        <Button
          title={'Scan'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
          color="#000000"
        />
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  loginContainer: {
    flex: 0.5,
    width: 200,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    marginBottom: 10,
  },
  fieldcontainer: {
    flexDirection: 'row',
  },
  icon: {
    padding: 10,
    marginLeft: -40,
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
});
