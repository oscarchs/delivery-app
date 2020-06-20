import React from 'react';
import { StyleSheet, Text, View, StatusBar,
        TextInput, TouchableOpacity,
        Image, KeyboardAvoidingView, ActivityIndicator, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Icon } from 'react-native-elements';
import globalStyles from '../Styles/globalStyles';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            last_login_username:'',
            authenticating: false,
            hide_password: true,
        };
        this._getLastLogin();
    }

    _getLastLogin = async() => {
        var last_login_username = await AsyncStorage.getItem('username');
        if (last_login_username != null){
            this.setState({username: last_login_username});
        }
    }

    _handleLogin = () =>{
            if ( this.state.username && this.state.password ){
                let formdata = new FormData();
                formdata.append('email', this.state.username);
                formdata.append('password', this.state.password);
                this.setState({authenticating:true})
                fetch('https://delivry-app.herokuapp.com/index.php/v1/user_authentication', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata,
                }).then((response) => response.json()).catch( error => { 
                        console.log(error);
                        alert(error);
                    }).then((res => {
                        this.setState({authenticating:false});
                        if ( res ){
                            if (res.success === true){
                                AsyncStorage.setItem('current_user', JSON.stringify(res.data));
                                this.props.navigation.navigate('ClientHome');
                                this.props.navigation.pop();
                            }
                            else{
                                alert(res.message);
                            }
                        }
                        else{
                            return;
                        }
                        
                }));

            }
            else{
                console.log("Something is missing");
            }

    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor:'#264653', alignItems: 'stretch', justifyContent: 'center'}} behavior='padding'>
                    
                    <View style={{alignItems:'center'}}>
                    <Image
                        style={{width: 200, height: 200, margin:10}}
                        source={require('../../android/app/src/main/res/drawable/ecommercelogo.png')}/>
                    </View>
                    {
                        this.state.authenticating ? (<ActivityIndicator size="large" color="#2a9d8f" />):
                        (
                        <React.Fragment>
                        <View style={{flexDirection: "row", alignItems:'center', justifyContent:'center', margin:10, paddingLeft:20, backgroundColor:'rgba(255,255,255, 0.1)', borderRadius:25}}>
                            <Icon name="user" type='feather' size={20} color={'#ffffff'}/>
                            <TextInput style={globalStyles.inputBox}
                                placeholder="Usuario"
                                placeholderTextColor = "#ffffff"
                                selectionColor="#fff"
                                onChangeText={ (text) => this.setState({username:text})}
                                defaultValue = {this.state.username}
                                autoCapitalize={'none'}
                                />
                        </View>
                        <View style={{flexDirection: "row", alignItems:'center', justifyContent:'center', margin:10, paddingLeft:20,paddingRight:20, backgroundColor:'rgba(255,255,255, 0.1)', borderRadius:25}}>
                            <Icon name="lock" type='feather' size={20} color={'#ffffff'}/>
                            <TextInput style={globalStyles.inputBox}
                                placeholder="Contraseña"
                                secureTextEntry={this.state.hide_password}
                                placeholderTextColor = "#ffffff"
                                onChangeText={ (text) => this.setState({password:text})}
                                defaultValue = {this.state.password}

                                />
                            <TouchableOpacity onPressIn={ () => { this.setState({hide_password:false})}} onPressOut={ () => { this.setState({hide_password:true})}}>
                                <Icon name='eye-off-outline' type='material-community' color='grey'/>
                            </TouchableOpacity>
                        </View>
                        </React.Fragment>
                        )
                    }
                    
                    <TouchableOpacity style={globalStyles.buttonStyle2} onPress={this._handleLogin}>
                                    <View style={{ flex:1,flexDirection: "row", alignItems: "center"}}>
                                        <Text style={{color:'#264653', fontWeight:'bold'}}>Ingresar</Text>
                                    </View>
                    </TouchableOpacity>
                                    <View style={{flexDirection: "row", alignItems: "center", justifyContent:'center'}}>
                                        <TouchableOpacity>
                                            <Text style={{color:'#2a9d8f', fontWeight:'bold', margin:5}}>Olvidé mi contraseña</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('RegistryForm') }>
                                            <Text style={{color:'#2a9d8f', fontWeight:'bold', margin:5}}>Crear cuenta nueva</Text>
                                        </TouchableOpacity>
                                    </View>
            </View>
            </TouchableWithoutFeedback>
        );
    }

};

export default Login;