import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {Card} from 'react-native-shadow-cards';


export default class StudentLanding extends Component {

  render() {
    return (
      <View style={{ flex:1, backgroundColor: '#DCDCDC', flexDirection: 'column' }}>
       <View style={styles.container}>
          <Card style={{padding: 50, margin: 10}}>
            <Text style={{textAlign: 'center'}}>MM1</Text>
          </Card>
      </View>
        <View style={styles.actioncontainer}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#BADA55' title="New Task" onPress={() => this.props.navigation.navigate('ViewFeedback')}>
              <IconMaterial name="feedback" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#7fe5f0' title="New Task" onPress={() => this.props.navigation.navigate('MakeUpdate')}>
              <IconMaterialCommunityIcons name="update" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#40e0d0' title="New Task" onPress={() => this.props.navigation.navigate('Analytics')}>
              <IconMaterialCommunityIcons name="google-analytics" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#40e0d0' title="New Task" onPress={() => this.props.navigation.navigate('QRScanner')}>
              <IconMaterialCommunityIcons name="qrcode-scan" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        {/* </View> */}
      </View>
    </View>

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
    backgroundColor: '#DCDCDC',
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
