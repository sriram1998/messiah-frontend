import * as React from 'react';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Alert, Button, TextInput, View, StyleSheet, AsyncStorage} from 'react-native';
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
    const { userEmail, username, password } = this.state;
    
    userEmail = userEmail.split("@");
    const userEmailBeforeAt = userEmail[0];
    const userEmailAfterAt = userEmail[1];
    const userEmailBeforePlus = userEmailBeforeAt.split("+")[0];
    const regExStr = `[^A-Za-z0-9]`;
    const re = regexp.MustCompile(regExStr);
    const userEmailStripped = re.ReplaceAllString(userEmailBeforePlus, "");
    const finalEmail = userEmailStripped + "@" + userEmailAfterAt;
    
    if(username.length<5) {
      Toast.show('Username too short');
      return;
    }
    if(password.length<5) {
      Toast.show('Password too short');
      return;
    }
    if(this.props.type == 'student') {
      axios({
        method: 'post',
        url: 'http://192.168.43.217:80/user/login',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        data: {roll: username, password: password, email: finalEmail},
      })
      .then(response => {
        console.log("Hello ", response.data);
        _storeData("mess", response.data.mess);
        _storeData("name", response.data.name);
        _storeData("rollNum", username);
        this.props.navigation.navigate('StudentLanding');
      })
      .catch(function (error) {
        Toast.show(error.message);
      });
    } else {
      axios({
        method: 'post',
        url: 'http://192.168.43.217:80/caterer/login',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        data: {messName: username, password: password},
      })
      .then(response => {
        console.log(response.data);
        _storeData("messID", response.data.mess);
        this.props.navigation.navigate('CatererLanding');
      })
      .catch(function (error) {
        Toast.show(error.message);
      });
    }
  }

  render() {

    return (
      <View style={styles.container}>
        {/* (this.props.type == 'student') ? <IconMaterialCommunityIcons name='ios-people' size={20} style={styles.icon} /> : <IconMaterialCommunityIcons name='food-variant' size={20} style={styles.icon} /> */}
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
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          <IconMaterialCommunityIcons name='textbox-password' size={20} style={styles.icon} />
        </View>

        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
          color="#000000"
        />
      </View>
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
    color:"white"
    // backgroundColor: '#DCDCDC',
  },
  loginContainer: {
    flex: 0.5,
    width: 200,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    justifyContent: 'center',
    // backgroundColor: '#DCDCDC',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
    marginBottom: 10,
  },
  fieldcontainer: {
    flexDirection: 'row',
  },
  icon: {
    padding: 10,
    marginLeft: -40,
    color : "white"
  },
});
