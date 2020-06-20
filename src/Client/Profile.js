import React from 'react';
import { StyleSheet, Text, View, StatusBar,
    TextInput, TouchableOpacity,
    Image } from 'react-native';


class ClientProfile extends React.Component{
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
        return(<View>
            <Text>CLient Profile</Text>
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
export default ClientProfile;