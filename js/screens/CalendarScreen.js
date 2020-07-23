import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Calendar from '../components/Calendar';

export default class CalendarScreen extends Component{


    arregloInfo = [1, 3, 5, 21];


    render(){
        return(
            <Calendar information={this.arregloInfo}/>
        );
    }
}
