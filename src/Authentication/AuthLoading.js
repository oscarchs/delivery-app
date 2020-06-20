import React from 'react';
import { StyleSheet, Text, View, StatusBar,
        TextInput, TouchableOpacity,
        Image, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Icon } from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from "yup";
import globalStyles from '../Styles/globalStyles';


class Authentication extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_user: null,
        };
        this.authenticate();
    }



    authenticate = async() => {
        let current_user = await AsyncStorage.getItem('current_user');
        this.setState({current_user:JSON.parse(current_user)});
        if( this.state.current_user ){
            this.props.navigation.navigate('ClientHome');
        }
        else{
            this.props.navigation.navigate('Login');
        }




    }
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', backgroundColor:'#264653', alignItems: 'stretch', justifyContent: 'center'}} behavior='padding'>
              {
                  !this.state.current_user && (<ActivityIndicator size="large" color="#2a9d8f" />)
              }      
                    <Text style={{color:'white', textAlign:'center'}}>Verificando datos</Text>  
            </View>          
        );
    }

};

export default Authentication;