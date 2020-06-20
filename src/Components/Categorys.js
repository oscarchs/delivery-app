import React from 'react';
import { StyleSheet, Text, View, StatusBar,
    TextInput, TouchableOpacity,
    Image } from 'react-native';
    import { Icon } from 'react-native-elements';


    const dark_green_color = '#264653';
    const green_color = '#2a9d8f';
    const orange_color = '#e76f51';
    const light_orange = '#f4a261'
    const yellow_color = '#e9c46a';

    class Categorys extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_user : '',
            spinner: false,

        };
    }

    componentDidMount = () =>{
    }
    render(){
        return(
            <View style={{flex:3,flexDirection:'column', alignItems:'stretch'}}>
                <View style={{flex:1,flexDirection:'row', alignItems:'stretch'}}>
                    <TouchableOpacity style={styles.singleCategory} onPress={ () => this.props.navigation.navigate('StoreList', {category:'food'}) }>
                        <Icon name='food' type='material-community' size={60} color={green_color}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleCategory} onPress={ () => this.props.navigation.navigate('StoreList', {category:'market'}) }>
                        <Icon name='shop' type='entypo' size={50} color={green_color}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'row', alignItems:'stretch'}}>
                    <TouchableOpacity style={styles.singleCategory} onPress={ () => this.props.navigation.navigate('StoreList', {category:'drugstores'})}>
                        <Icon name='medicinebox' type='antdesign' size={50} color={green_color}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.singleCategory} onPress={ () => this.props.navigation.navigate('StoreList', {category:'drinks'})}>
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
export default Categorys;