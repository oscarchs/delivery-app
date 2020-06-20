import React from 'react';
import { StyleSheet, Text, View, StatusBar,
    TextInput, TouchableOpacity,
    Image } from 'react-native';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';


const dark_green_color = '#264653';
const green_color = '#2a9d8f';
const orange_color = '#e76f51';
const light_orange = '#f4a261'
const yellow_color = '#e9c46a';

class Store extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_user : '',
        };
        this._getCurrentUser();
    }

    _getCurrentUser = async () =>{
        var current_user = await AsyncStorage.getItem('current_user');
        this.setState( {current_user: JSON.parse(current_user)});
    }

    _signOut = async () => {
        await AsyncStorage.clear();
        await AsyncStorage.setItem('username',this.state.current_user.email);
        this.props.navigation.navigate('Authentication');
    };

    componentDidMount = () =>{
    }
    render(){
        return(
            <View style={{flex:3, flexDirection:'column', color:'black'}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:dark_green_color}}>
              <View>
                <Image style={{width: 100, height: 100, margin:10}} source={require('../../android/app/src/main/res/drawable/unknown.png')}/>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'white'}}>{ this.state.current_user.name } </Text>
                <Text style={{color:'white'}}>{ this.state.current_user.last_name }</Text>

              </View>
  
            </View>
            <View style={{flex:2}}>
              <View style={{flex:6}}>
                  <View style={{flex:5}}>
                      <DrawerNavigatorItems {...this.props}/>
                  </View>
                  <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end', margin:20, alignItems:'flex-end'}}>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={this._signOut}>
                      <View>
                        <Icon name='logout' type='material-community'/>
                      </View>
                      <View>
                        <Text>Cerrar Sesión</Text>
                      </View>
                    </TouchableOpacity>
                    
                  </View>
              </View>
                         
            </View>
  
          </View>
            
            );
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    spinnerTextStyle:{
        color: '#ffffff',
    },  
    
});
export default Store;