import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Dash from 'react-native-dash';
import AnalyticData from './AnalyticData';

//saloni IP
class analytics extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <AnalyticData />
        )
    }
}

export default analytics;