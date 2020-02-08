import * as React from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

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
    this.props.navigation.navigate('Details')
    // Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          // Add icon
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          // Add icon
          />

          <Button
            title={'Login'}
            style={styles.input}
            onPress={this.onLogin.bind(this)}
            color="#000000"
          />
        </View>
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
    width: 300,
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
});
