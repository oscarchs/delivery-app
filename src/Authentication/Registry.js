import React from 'react';
import { StyleSheet, Text, View, StatusBar,
        TextInput, TouchableOpacity,
        Image, KeyboardAvoidingView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Icon } from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from "yup";
import globalStyles from '../Styles/globalStyles';


class RegistryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            last_login_email:'',
        };
    }

    render() {
        return(
            
            <View style={{flex: 1, flexDirection: 'column', backgroundColor:'#264653', alignItems: 'stretch', justifyContent: 'center'}} behavior='padding'>
                <Formik
                    initialValues = {{ name:'' , lastname: '', phone: '', email: '', password: ''}}
                    onSubmit={values => console.log(values)}
                >
                    {
                        (props) => (
                            <View>
                                <View style={globalStyles.inputWithIconField}>
                                <Icon name="user" type='feather' size={20} color={'#ffffff'}/>
                                <TextInput
                                    style={globalStyles.inputBoxForm}
                                    placeholder="Nombre"
                                    placeholderTextColor={'rgba(255, 255,255, 0.2)'}
                                    onChangeText={props.handleChange('name')}
                                    value={props.values.name}
                                />
                                </View>
                                <View style={globalStyles.inputWithIconField}>
                                <Icon name="lock" type='feather' size={20} color={'#ffffff'}/>
                                <TextInput
                                    style={globalStyles.inputBoxForm}
                                    placeholder="Apellido"
                                    placeholderTextColor={'rgba(255, 255,255, 0.2)'}
                                    onChangeText={props.handleChange('lastname')}
                                    value={props.values.title}
                                />
                                </View>
                                <View style={globalStyles.inputWithIconField}>
                                <Icon name="mail" type='feather' size={20} color={'#ffffff'}/>
                                <TextInput
                                    style={globalStyles.inputBoxForm}
                                    placeholder="Correo electrónico"
                                    placeholderTextColor={'rgba(255, 255,255, 0.2)'}
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />
                                </View>
                                <View style={globalStyles.inputWithIconField}>
                                 <Icon name="smartphone" type='feather' size={20} color={'#ffffff'}/>
                                <TextInput
                                    style={globalStyles.inputBoxForm}
                                    placeholder="Número móvil"
                                    placeholderTextColor={'rgba(255, 255,255, 0.2)'}
                                    onChangeText={props.handleChange('phone')}
                                    value={props.values.phone}
                                    keyboardType={'numeric'}
                                />
                                </View>
                                <View style={globalStyles.inputWithIconField}>
                                 <Icon name="key" type='feather' size={20} color={'#ffffff'}/>
                                <TextInput
                                    style={globalStyles.inputBoxForm}
                                    placeholder="Contraseña"
                                    placeholderTextColor={'rgba(255, 255,255, 0.2)'}
                                    onChangeText={props.handleChange('password')}
                                    secureTextEntry={true}
                                    value={props.values.password}
                                />
                                </View>
                                <TouchableOpacity style={globalStyles.buttonStyle2} onPress={ () => { } }>
                                    <View style={{ flex:1,flexDirection: "row", alignItems: "center"}}>
                                        <Text style={{color:'#264653', fontWeight:'bold'}}>Confirmar</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                        )
                    }


                </Formik>
            </View>
        );
    }

};

class ConfirmationCode extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            last_login_email:'',
        };
    }

    render() {
        return(
            
            <View style={{flex: 1, flexDirection: 'column', backgroundColor:'#264653', alignItems: 'stretch', justifyContent: 'center'}} behavior='padding'>
                    <Text>Codigo de confirmación</Text>
            </View>
        );
    }
}
export {RegistryForm, ConfirmationCode};