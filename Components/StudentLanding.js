import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';


export default class StudentLanding extends Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#BADA55' title="New Task" onPress={() => console.log("Dashboard")}>
            <IconMaterial name="dashboard" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#7fe5f0' title="New Task" onPress={() => console.log("Menu")}>
            <IconMaterialCommunityIcons name="food" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#40e0d0' title="New Task" onPress={() => console.log("checkin")}>
            <IconMaterialCommunityIcons name="account-check" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#003366' title="New Task" onPress={() => console.log("Meal skips")}>
            <IconMaterialCommunityIcons name="food-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#00ff7f' title="New Task" onPress={() => console.log("Dashboard")}>
            <IconMaterial name="feedback" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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
});
