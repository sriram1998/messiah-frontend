import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Dash from 'react-native-dash';
import FoodData from './FoodData';

//saloni IP
class FoodConsume extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <FoodData />
        )
    }
}

export default FoodConsume;