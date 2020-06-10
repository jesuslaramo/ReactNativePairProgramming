import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button onPress={()=>this.props.navigation.navigate('Profile')} title="Ir a perfil"></Button>
                <Button onPress={()=>this.props.navigation.navigate('Login')} title="Ir a formulario"></Button>
            </View>
        );
    }
}
