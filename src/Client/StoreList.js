import React from 'react';
import { StyleSheet, Text, View, StatusBar,
    TextInput, TouchableOpacity,
    Image , FlatList, TouchableHighlight, ImageBackground} from 'react-native';
import ProductList from './ProductList';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const dark_green_color = '#264653';
const green_color = '#2a9d8f';
const orange_color = '#e76f51';
const light_orange = '#f4a261'
const yellow_color = '#e9c46a';

const color_theme = green_color; 

class StoreList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_user : '',
            spinner: false,
            store_list: [
            
                {
                    'id': '123123',
                    'name': 'CHIFA TA KE',
                    'description': 'Comida oriental',
                    'address': 'Calle asdas 123',
                    'category': 'food',
                    'sub_category': 'chifa',
                    'artwork': 'https://lh3.googleusercontent.com/rvuEhR77lyPFYLQbBumUHT5gPFZcTEzOAjB8T4M-VssuxlrgSXMbEZ8zb6ihAkPuVeo8-pEZAYSYvGKm=w768-h768-n-o-v1',
                    'artwork_inside': 'https://feelingperu.com/wp-content/uploads/2019/09/Chifa-Hou-Wha.jpg',
                    'rating': '4.5',
                    'calculated_distance': '2.4 Km'
                },
                {
                    'id': '123124',
                    'name': 'POLLERIA EL DORADO',
                    'description': 'Pollos, carnes y parrillas',
                    'address': 'Calle asdas 123',
                    'category': 'food',
                    'sub_category': 'polleria',
                    'artwork': 'https://i0.wp.com/www.prensaregional.pe/wp-content/uploads/2019/12/Amago-de-incendio-en-Poller%C3%ADa-El-Dorado-27122019-1.jpg?fit=960%2C1280&ssl=1',
                    'artwork_inside': 'https://media-cdn.tripadvisor.com/media/photo-s/11/fe/21/2e/polleria-y-restaurant.jpg',
                    'rating': '4.0',
                    'calculated_distance': '< 1 Km'
                },
                {
                    'id': '1231225',
                    'name': 'CEVICHERIA LA CALETA',
                    'description': 'Pescados y mariscos',
                    'address': 'Calle asdas 123',
                    'category': 'food',
                    'sub_category': 'cevicheria',
                    'artwork': 'https://media-cdn.tripadvisor.com/media/photo-s/12/40/fb/5c/la-caleta-sur.jpg',
                    'artwork_inside': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YKCpVEfhb-wbrz7rNFFwXyGG9c39yMNV4dyPq6X1cJmnruca1w&s',
                    'rating': '4.0',
                    'calculated_distance': '< 1 Km'
                },
                {
                    'id': '1231226',
                    'name': 'KFC',
                    'address': 'Calle asdas 123',
                    'description': 'Pollo frito y diversos complementos',
                    'sub_category': 'polleria',
                    'category': 'food',
                    'artwork': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7saynNKfrEYuw4B4sbWjCUxO-AsjJLpd2_RLdZp1v01uLJINf&usqp=CAU',
                    'artwork_inside': 'https://openplaza.com.pe/sites/default/files/Peru/Huancayo/Tiendas/Principal/KFC.jpg',
                    'rating': '4.0',
                    'calculated_distance': '< 1 Km'
                }

        ]

        };
    }

navigateToStore = ( item ) => {
    requestAnimationFrame ( () => {
        this.props.navigation.navigate('ProductList',{ category_label:this.props.navigation.getParam('category_label','unknown'),
        store_data: item }); 
    });
    
}

storeLayout = ({ item }) => (
<TouchableOpacity onPress={ () => this.navigateToStore(item)  }>
<ImageBackground source={{uri:item.artwork}} style={{flex:1,resizeMode: "cover",height:100, margin:10,opacity:1}}>
        <LinearGradient colors={['rgba(255,255,255,0)', dark_green_color]} style={{flex:1,flexDirection: 'column', borderColor:'grey', justifyContent:'flex-end'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:2, paddingLeft:5, paddingRight:5}}>
                <View>
                    <Text style={{color:'white'}}>{item.name}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                                        <Icon name='star' type='feather' size={15} color={'white'}/>
                                            <Text style={{fontSize:11, color: 'white'}}> 5  </Text>
                                        <Icon name='clock' type='feather' size={15} color={'white'}/>
                                            <Text style={{fontSize:11, color: 'white'}}> 20 min </Text>
                </View>

            </View>
        </LinearGradient>
</ImageBackground>
</TouchableOpacity>

)

componentDidMount = () =>{
}
render(){
return(<View>
    <FlatList
          data={this.state.store_list}
          renderItem={this.storeLayout}
          keyExtractor={item => item.id}
        />
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
export default StoreList;