import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput,ScrollView, ImageBackground } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
// import { Card, Title, Paragraph } from 'react-native-paper';
import { Card } from 'react-native-shadow-cards';


export default class FeedbackInput extends Component {

    render() {
        return (
            <ImageBackground style={styles.bg} source={require("../assets/Wallpaper.jpg")}>
            <View style={{ flex: 1, backgroundColor: '#DCDCDC' }}>
                <View style={styles.container}>
                    <Text style={{ fontWeight: 'bold' }}>FEEDBACK FORM</Text>
                    <Text>{"\n"}</Text>
                    
                        <TextInput
                            // value={this.state.username}
                            // onChangeText={(username) => this.setState({ username })}
                            // placeholder={'Enter feedback here'}
                            style={styles.input}
                        />
        
                </View>
                <View style={[{ flex: 0.3, alignItems: 'center' }]}>
                    <Button
                        color="#00b8ff"
                        maxWidth="50"
                        title={'Submit Feedback'}
                        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                    />
                </View>
                </View>
                </ImageBackground>
    );
  }
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
      },
      input: {  
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'black',
        color: 'black',
        width: 300,
        height: 400,
        flexDirection: 'row',
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        textAlignVertical: 'top',
        overflow: 'scroll',
        // marginBottom: 10,
    },
    button: {
        color: 'black',
        borderColor: 'black',
        maxWidth: 300,
        // margin: 500,

    },
    bg: {
        flex: 1,
        width: '100%',
        height: '100%'
      },
});
