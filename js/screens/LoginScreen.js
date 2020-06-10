import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert} from 'react-native';

export default class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            user: '',
        }
    }


    obtenerUsuarios(userId){
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/`)
        .then( response => response.json())
        .then( json => this.setState({user: json}));
    }



    render(){
        return(
            <View style={styles.contenedor}>
                <Text>Email</Text>
                <TextInput style = {styles.registro} placeholder={'Escribe tu correo'} keyboardType={"email-address"} onChangeText={(email) => this.setState({email})} autoCapitalize={"none"} autoCompleteType={'email'} textContentType={'emailAddress'}></TextInput>

                <Text>Contraseña</Text>
                <TextInput style = {styles.registro} placeholder={'Escribe tu contraseña'} onChangeText={(password) => this.setState({password})} autoCapitalize={"none"} secureTextEntry={true}></TextInput>

                <Text>Nombre: {this.state.user.name}</Text>
                <Text>Email: {this.state.user.username}</Text>
                <Button onPress={()=>this.obtenerUsuarios(8)} title="Ver estado"></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    contenedor : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    registro : {
      borderBottomWidth : 1,
      borderBottomColor : 'black',  
      width: '80%',
    },
})