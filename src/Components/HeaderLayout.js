import React from 'react';
import { StyleSheet, Text, View, StatusBar,
    TextInput, TouchableOpacity,
    Image } from 'react-native';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { Icon, Badge, withBadge } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';


const dark_green_color = '#264653';
const green_color = '#2a9d8f';
const orange_color = '#e76f51';
const light_orange = '#f4a261'
const yellow_color = '#e9c46a';
const white_alpha = 'rgba(255,255,255,0.7)';

class HeaderLayout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current_product_number: null,
        }
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
        this.props.navigation.addListener('willFocus', (route) => { 
            console.log('asdasda refresh header');
        });
    }
    
    render(){
        const { options } = this.props.scene.descriptor;
        const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.routeName;
        const BadgedIcon = withBadge(options.cartItems)(Icon)

        return(
            <View style={{flexDirection:'row',backgroundColor:green_color, height:70, alignItems:'stretch',shadowColor: green_color,
            shadowOffset: {
              width: 0,
              height: 2
            },
            
            shadowRadius: 10,
            shadowOpacity: 1, elevation:3}}>
              <View style={{flex:1.5, justifyContent:'center', alignItems:'center'}}>
                {
                    options.headerBackTitle ? (
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={ () => this.props.navigation.goBack(null)}>
                            <Icon name='ios-arrow-back' type='ionicon' color={white_alpha} size={20}/>
                            <Text style={{color:white_alpha, fontWeight:'bold'}}>  { options.headerBackTitle }</Text>
                        </TouchableOpacity>
                    ) : (
                        null
                    )
                
                }
              </View>
              <View style={{flex:3, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white', fontWeight:'bold'}}>{title}</Text>
              </View>
              <View style={{flex:1.5, justifyContent:'center', alignItems:'center'}}>
                {
                    options.headerRight ? (
                            options.cartItems ? (
                                <BadgedIcon name='shopping-cart' type="feather" size={25} color={'white'} />
                            ) : (
                                <Icon name='shopping-cart' type="feather" size={25} color={'white'} />
                            )
                        ) : (
                            null
                        )

                }
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
export default HeaderLayout;