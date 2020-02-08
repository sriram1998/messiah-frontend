import * as React from 'react';
import { Alert, Button, TextInput, View, StyleSheet, AsyncStorage } from 'react-native';
import { _storeData, _retrieveData } from '../config/localstorage';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

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
    // console.log(username, this.props.type);
    this.props.navigation.navigate('StudentLanding');
    // call datafetch
    _storeData("hello", "hel")
  }

  render() {

    return (
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
});