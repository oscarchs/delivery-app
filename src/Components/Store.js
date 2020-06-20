import React from 'react';
import { StyleSheet, Text, View, StatusBar,
    TextInput, TouchableOpacity,
    Image } from 'react-native';
import ProductList from './ProductList';


class Store extends React.Component{
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
            <View>
            <Text> lista de productos </Text>
            <ProductList/>
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