import React, { Component } from 'react';
import axios from 'axios';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Dash from 'react-native-dash';

export default class FoodData extends Component {
    constructor() {
        super();
        this.state = {
            foodData: [],
        };
    }

    componentDidMount() {
        axios({
            method: 'post',
            url: 'http://192.168.43.217:80/caterer/getFoodData',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            data: { messID: 1},
        })
            .then(response => {
                this.state.foodData.push(response.data.response.map((item, index) => {
                    return (
                        <Card key={index} style={{ padding: 20, margin: 10, flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 0.5, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ flex: 1, textAlign: "center"}}>Day {index+1}</Text>
                            </View>
                            <Dash style={{ width: 1, height: 120, flexDirection: 'column' }} />
                            <View style={{ flex: 1, padding: 20, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <Text>{item} kg </Text>
                            </View>
                        </Card>
                        );
                    }));
                this.setState({
                    foodData: this.state.foodData
                });
            })
            .catch(function (error) {
                //Toast.show(error.message);
                console.log(error)
            });
    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {this.state.foodData.map((item, index) => item)}
                </View>
            </ScrollView>
        )
    }
}