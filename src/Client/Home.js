import React from 'react';
import { StyleSheet, Text, View, StatusBar,
    TextInput, TouchableOpacity,
    Image } from 'react-native';
import Categorys from '../Components/Categorys';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const dark_green_color = '#264653';
const green_color = '#2a9d8f';
const orange_color = '#e76f51';
const light_orange = '#f4a261'
const yellow_color = '#e9c46a';

class ClientHome extends React.Component{
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

    componentDidMount = () =>{
    }
    render(){
        return(
            <View style={{flex:3,flexDirection:'column', alignItems:'stretch'}}>
                <View style={{flex:1,flexDirection:'row', alignItems:'stretch'}}>
                    <TouchableOpacity style={styles.singleCategory} onPress={ () => this.props.navigation.navigate('StoreList', {category:'food', category_label:'Restaurantes'}) }>
                        <Icon name='food' type='material-community' size={60} color={green_color}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleCategory} onPress={ () => this.props.navigation.navigate('StoreList', {category:'market', category_label:'Carnes, frutas y verduras'}) }>
                        <Icon name='shop' type='entypo' size={50} color={green_color}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'row', alignItems:'stretch'}}>
                    <TouchableOpacity style={styles.singleCategory} onPress={ () => this.props.navigation.navigate('StoreList', {category:'drugstores', category_label:'Farmacias'})}>
                        <Icon name='medicinebox' type='antdesign' size={50} color={green_color}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleCategory} onPress={ () => this.props.navigation.navigate('StoreList', {category:'drinks', category_label:'Licorerías'})}>
                        <Icon name='drink' type='entypo' size={50} color={green_color}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'row', alignItems:'stretch'}}>
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
    singleCategory:{
        flex:1, margin:20, justifyContent:'center', alignItems:'center', borderRadius:20,shadowColor: green_color,
        shadowOffset: {
          width: 0,
          height: 2
        },
        
        shadowRadius: 10,
        shadowOpacity: 1, elevation:2
    }
    
});
export default ClientHome;