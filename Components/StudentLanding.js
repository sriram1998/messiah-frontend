import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { Card, Title, Paragraph } from 'react-native-paper';


export default class StudentLanding extends Component {

  render() {
    return (
      <View style={{ flex:1,backgroundColor: '#f3f3f3' }}>
        {/* <View style={styles.card}> 
            <Card>  
              <Card.Content >
                <Title>Hackilles</Title>
                <Paragraph>110116007</Paragraph>
                <Paragraph>MM1</Paragraph>
              </Card.Content>
            </Card>
        </View> 
        <View> */}
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
            <ActionButton.Item buttonColor='#00ff7f' title="New Task" onPress={() => this.props.navigation.navigate('StudentLanding')}>
              <IconMaterial name="feedback" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        {/* </View> */}
      </View>

      //   <View>
      //     <ActionButton buttonColor="rgba(231,76,60,1)">
      //       <ActionButton.Item buttonColor='#BADA55' title="New Task" onPress={() => this.props.navigation.navigate('Dashboard')}>
      //         <IconMaterial name="dashboard" style={styles.actionButtonIcon} />
      //       </ActionButton.Item>
      //       <ActionButton.Item buttonColor='#7fe5f0' title="New Task" onPress={() => this.props.navigation.navigate('Menu')}>
      //         <IconMaterialCommunityIcons name="food" style={styles.actionButtonIcon} />
      //       </ActionButton.Item>
      //       <ActionButton.Item buttonColor='#40e0d0' title="New Task" onPress={() => this.props.navigation.navigate('CheckIn')}>
      //         <IconMaterialCommunityIcons name="account-check" style={styles.actionButtonIcon} />
      //       </ActionButton.Item>
      //       <ActionButton.Item buttonColor='#003366' title="New Task" onPress={() => this.props.navigation.navigate('StudentLanding')}>
      //         <IconMaterialCommunityIcons name="food-off" style={styles.actionButtonIcon} />
      //       </ActionButton.Item>
      //       <ActionButton.Item buttonColor='#00ff7f' title="New Task" onPress={() => this.props.navigation.navigate('StudentLanding')}>
      //         <IconMaterial name="feedback" style={styles.actionButtonIcon} />
      //       </ActionButton.Item>
      //     </ActionButton>
      //   </View>

      // </View>

    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 30,
    height: 30,
    color: 'white',
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
