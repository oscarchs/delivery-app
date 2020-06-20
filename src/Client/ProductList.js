import React from 'react';
import { StyleSheet, Text, View, StatusBar,
    TextInput, TouchableOpacity,
    Image, FlatList, TouchableHighlight, ImageBackground, Modal} from 'react-native';
    import { Icon, Button, Badge, withBadge } from 'react-native-elements';

    const dark_green_color = '#264653';
    const green_color = '#2a9d8f';
    const orange_color = '#e76f51';
    const light_orange = '#f4a261'
    const yellow_color = '#e9c46a';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';


const color_theme = green_color; 

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_user : '',
            current_order: '',
            spinner: false,
            store_data:'',
            show_cart: false,
            product_list: [
            
                {
                'id': '123123',
                'name': 'Producto número 1',
                'description': 'breeve description of numer 1',
                'category': 'category1',
                'unit': 'unidad',
                'unit_price':'10',
                'artwork': 'https://upload.wikimedia.org/wikipedia/commons/7/78/Cebiche_de_corvina.JPG',
                'rating': '3.5',
                'store_id': 'RestauranteX'
                },
                {
                'id': '12312223',
                'name': 'Producto número 2',
                'description': 'breeve description of numer 2',
                'category': 'category2',
                'unit': 'unidad',
                'unit_price':'3',
                'artwork':'https://t2.rg.ltmcdn.com/es/images/5/7/4/lomo_saltado_peruano_11475_orig.jpg',
                'rating': '3.5',
                'store_id': 'RestauranteX'
                },
                {
                    'id': '12312236',
                    'name': 'Producto número 2',
                    'description': 'breeve description of numer 2',
                    'category': 'category2',
                    'unit': 'kg',
                    'unit_price':'3',
                    'artwork': 'https://www.argenpapa.com.ar/images/noticias/1556380176_big.jpg',
                    'rating': '3.5',
                    'store_id': 'RestauranteX'
                    },
                    {
                        'id': '123122237',
                        'name': 'Producto número 2',
                        'description': 'breeve description of numer 2',
                        'category': 'category2',
                        'unit': 'kg',
                        'unit_price':'3',
                        'artwork': 'https://s2.eestatic.com/2019/08/13/ciencia/nutricion/Nutricion_421219181_132227659_1024x576.jpg',
                        'rating': '3.5',
                        'store_id': 'RestauranteX'
                        }
        ]


        };
    }

    listElement = ({ item }) => (
                <TouchableHighlight
                  key={item.id}
                    >
                      <View style={{flex: 1, flexDirection: 'column', margin:10, borderColor:'grey', borderWidth:0, borderRadius:8, shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1, elevation:3}}>
                        <View style={{flex:4,flexDirection:'row'}}>
                            <View style={{flex:1.5, margin:2,borderRadius:8}}>
                            <Image
                                resizeMode={'cover'}
                                style ={{width:120,height:120, borderRadius:8, shadowOpacity:10, margin:5}}
                                source={item.artwork}
                            />


                            </View>
                            <View style={{flex:2.5, margin:5,borderRadius:8}}>
                                <View style={{flex:1,flexDirection:'column'}}>
                                    <View style={{ margin:3}}>
                                        <Text style={{fontWeight:'bold', textShadowColor:'grey', color:'#264653'}}>{item.name}asdasdasd</Text>
                                    </View>
                                    <View style={{flexDirection:'row', flex:3}}>
                                        <View style={{flex:2}}>
                                            <Text>{item.description}</Text>
                                            <Text>{item.description}</Text>

                                            <View style={{flex:2, flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                        <Text>Variaciones</Text>
                                                </View >
                                                <View style={{flex:1}}>
                                                <Text>asdasda</Text>

                                                </View>

                                            </View>
                                        </View>
                                        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                            <Icon name='plussquare' type='antdesign' size={40} color={color_theme}/>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', flex:4}}>
                            <View style={{flex:1.5, flexDirection:'row', margin:5, borderColor:color_theme, borderWidth:0, borderRadius:10, justifyContent:'space-around'}}>
                                 <Icon name='minus' type='feather' size={20} color={color_theme}/>
                                <Text style={{fontWeight:'bold',fontStyle:'italic'}}>1</Text>
                                <Icon name='plus' type='feather' size={20} color={color_theme}/>

                            </View>
                            <View style={{flex:1.5, flexDirection:'row', margin:5, justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontStyle:'italic'}}>Variaciones</Text>
                                <Icon name='chevron-down' type='feather' size={20} color={color_theme}/>

                            </View>
                            <View  style={{flex:1, justifyContent:'center', flexDirection:'row'}}>
                                 <Text style={{fontWeight:'bold',fontStyle:'italic', fontSize:17, color:color_theme}}>S/.{item.unit_price}</Text>

                            </View>
                        </View>

                      </View>
                </TouchableHighlight>
    )

    secondLayout = ({ item }) => (
              <View style={{flex: 1, flexDirection: 'column', borderColor:'grey', borderBottomWidth:1, shadowColor: 'black',}}>
                <View style={{flex:4,flexDirection:'row'}}>
                    <View style={{flex:1.5, margin:2}}>
                    <Image
                        resizeMode={'cover'}
                        style ={{width:120,height:120,shadowOpacity:10, margin:5}}
                        source={{uri:item.artwork}}
                    />
                    </View>
                    <View style={{flex:2.5, margin:2,borderRadius:8}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{ margin:1}}>
                                <Text style={{fontWeight:'bold', textShadowColor:'grey', color:'#264653'}}>{item.name}asdasdasd</Text>
                            </View>
                            <View style={{flexDirection:'row', flex:3}}>
                                <View style={{flex:2, flexDirection:'column'}}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Icon name='star' type='feather' size={15} color={color_theme}/>
                                            <Text style={{fontSize:11, color: '#264653'}}> 5 </Text>
                                        <Icon name='clock' type='feather' size={15} color={color_theme}/>
                                            <Text style={{fontSize:11, color: '#264653'}}> 20 min </Text>
                                    </View>
                                    <View>
                                        <Text style={{fontStyle:'italic', color:'grey'}}>Aqui una breve descripcion del producto, peso, color, detalles.</Text>
                                    </View>
                                </View>
                                <View style={{flex:1, flexDirection:'column', alignItems:'stretch', justifyContent:'center'}}>
                                    <View style={{flex:3}}>
                                        <View style={{flex:1,flexDirection:'column',backgroundColor:color_theme, borderColor:color_theme,justifyContent:'center', borderWidth:1, borderColor:color_theme, borderRadius:5, margin:2}}>
                                            <TouchableOpacity>
                                            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                                <Text style={{color:'white', fontSize:11}}>Detalle </Text>
                                                <Icon name='edit' type='feather' size={15} color={'white'}/>
                                            </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flex:1,flexDirection:'column',justifyContent:'center', borderWidth:1, borderColor:color_theme, borderRadius:5, margin:2}}>
                                            <View style={{flexDirection:'row', borderColor:color_theme, borderWidth:0, justifyContent:'space-around'}}>
                                                <TouchableOpacity>
                                                    <Icon name='minus' type='feather' size={15} color={color_theme}/>
                                                </TouchableOpacity>
                                                    <Text style={{fontWeight:'bold',fontStyle:'italic', fontSize:11}}>1</Text>
                                                <TouchableOpacity>
                                                    <Icon name='plus' type='feather' size={15} color={color_theme}/>
                                                </TouchableOpacity>
    
                                            </View>

                                        </View>
                                        <View style={{flex:1, borderWidth:1,backgroundColor:color_theme, borderColor:color_theme, borderRadius:5, margin:2, flexDirection:'column', justifyContent:'center'}}>
                                            <TouchableOpacity>
                                                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                                    <Text style={{color:'white', fontSize:11}}>Agregar </Text>
                                                    <Icon name='shopping-cart' type='feather' size={15} color={'white'}/>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', flex:4}}>
                    <View style={{flex:1.5, flexDirection:'row', margin:5, borderColor:color_theme, borderWidth:0, borderRadius:10, justifyContent:'space-around'}}>
                
                    </View>
                    <View style={{flex:1.5, flexDirection:'row', margin:5, justifyContent:'center'}}>
                

                    </View>
                    <View  style={{flex:1, justifyContent:'center', flexDirection:'row'}}>

                    </View>
                </View>

              </View>
)

navigateToProduct = ( item ) => {
    requestAnimationFrame ( () => {
        this.props.navigation.navigate('ProductDetail',{ product_data: item }); 
    });
    
}

thirdLayout = ({ item }) => (
    <TouchableOpacity onPress={ () => this.navigateToProduct(item) }>
    <View style={{flex: 1, flexDirection: 'column', borderColor:'grey', borderBottomWidth:1, shadowColor: 'black',}}>
      <View style={{flex:4,flexDirection:'row'}}>
          <View style={{flex:1.5, margin:2}}>
          <Image
              resizeMode={'cover'}
              style ={{width:120,height:120,shadowOpacity:10, margin:5}}
              source={{uri:item.artwork}}
          />
          </View>
          <View style={{flex:2.5, margin:2,borderRadius:8}}>
              <View style={{flex:1,flexDirection:'column'}}>
                  <View style={{ margin:1}}>
                      <Text style={{fontWeight:'bold', textShadowColor:'grey', color:'#264653'}}>{item.name}asdasdasd</Text>
                  </View>
                  <View style={{flex:3,flexDirection:'column',margin:3}}>
                      <View style={{flex:2, flexDirection:'column'}}>
                          <View style={{flexDirection:'row', alignItems:'center'}}>

                          </View>
                          <View>
                              <Text style={{fontStyle:'italic', color:'grey'}}>Aqui una breve descripcion del pro du c t , peso, color, detalles.</Text>
                          </View>
                      </View>
                      <View style={{flex:1}}>
                                                <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center', paddingRight:7}}>
                                                    <View style={{borderRadius:10, borderColor:yellow_color, borderWidth:1, flexDirection:'row', alignItems:'flex-end', padding:5, backgroundColor:yellow_color}}>
                                                        <Text style={{color:'white', fontSize:15}}>S/.{item.unit_price}</Text>
                                                        <Text style={{ fontStyle:'italic', color: 'white', fontSize:11}}> x {item.unit}</Text>
                                                    </View>
                                                </View>
                      </View>

                  </View>

              </View>
          </View>
      </View>
      <View style={{flexDirection:'row', flex:4}}>
          <View style={{flex:1.5, flexDirection:'row', margin:5, borderColor:color_theme, borderWidth:0, borderRadius:10, justifyContent:'space-around'}}>
      
          </View>
          <View style={{flex:1.5, flexDirection:'row', margin:5, justifyContent:'center'}}>
      

          </View>
          <View  style={{flex:1, justifyContent:'center', flexDirection:'row'}}>

          </View>
      </View>

    </View>
    </TouchableOpacity>
    
    
)

cartItemLayout = ({ item }) => (
    <View style={{flex: 4, flexDirection:'row', justifyContent:'center', alignItems:'center', padding:10}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity style={{borderRadius:25}} onPress={ () => this._removeCartItem(item) }>
                            <Icon name='md-trash' type='ionicon' color={'white'} size={25} color={yellow_color}/>
            </TouchableOpacity>
        </View>
        <View style={{flex:3, flexDirection:'column', alignItems:'flex-start', justifyContent:'center'}}>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text style={{fontStyle:'italic'}}> {item.product_name} </Text>
                </View>
                <View>
                    <Text style={{fontStyle:'italic'}}> S./{item.final_price} </Text>
                </View>
            </View>
        </View>

    </View>
)

_removeCartItem = (item) =>{
    let current_order = {...this.state.current_order};
    let index = current_order.product_list.indexOf(item);
    if ( index !== -1 ){
        current_order.product_list.splice(index,1);
        this.setState({current_order});
        AsyncStorage.setItem('current_order', JSON.stringify(current_order));
    }
    console.log(current_order);
}

    
headerLayout = ({item}) => (
    
    <View style={{flex:1, backgroundColor:dark_green_color}}>
        <ImageBackground source={{uri:this.state.store_data.artwork_inside}} style={{height:150,flex:1,resizeMode: "cover",opacity:0.7}}>
            <LinearGradient colors={['rgba(255,255,255,0)', dark_green_color]} style={{flex:1,flexDirection: 'row', borderColor:'grey', alignItems:'flex-end', justifyContent:'space-between'}}>
                <Text style={{color:'white',paddingLeft:10, fontSize:15}}>{this.state.store_data.name}</Text> 
                <View style={{flexDirection:'row', paddingRight:10}}>
                    <Icon name='star' type='feather' size={17} color={'white'}/>
                    <Text style={{fontSize:14, color: 'white'}}> 5 </Text>
                    <Icon name='clock' type='feather' size={17} color={'white'}/>
                    <Text style={{fontSize:14, color: 'white'}}> 20 min </Text>
                </View>
                
            </LinearGradient>
        </ImageBackground>
    </View>
    
)
    componentDidMount = async() =>{
        let store_data = this.props.navigation.getParam('store_data',null);
        this.setState({store_data});
        let current_order = await AsyncStorage.getItem('current_order',null);
        if( current_order ){
            this.setState({current_order: JSON.parse(current_order)});
        }
        else{
            let new_order = {
                store_id: store_data.id,
                product_list: [],
                sub_total: 0,
                igv: 0,
                final_price: 0,
                delivery_type:'',
                payment_method:'',
                client_id:'',
                client_address:'',
                store_address:'',
            };
            AsyncStorage.setItem('current_order', JSON.stringify(new_order));
            this.setState({current_order: new_order});

        }
        this.props.navigation.addListener('willFocus', 
            async(route) => { 
                current_order = await AsyncStorage.getItem('current_order');
                this.setState({current_order: JSON.parse(current_order)});
            });
    }


    render(){

        return(<View style={{flex:1}}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.show_cart}
                        onRequestClose={() => {
                            alert("Modal has been closed.");
                            }}
                        >
                        <View style={styles.centeredView}>

                        <View style={styles.modalView}>
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center',position: 'absolute', top: -2, right: -2, backgroundColor:dark_green_color, borderRadius:25}} onPress={ () => this.setState({show_cart:false})}>
                            <Icon name='closecircle' type='antdesign' color={dark_green_color} size={30} iconStyle={{color:'white'}}/>
                        </TouchableOpacity>
                                {
                                    this.state.current_order ? (
                                        <FlatList
                                        data={this.state.current_order.product_list}
                                        renderItem={this.cartItemLayout}
                                        keyExtractor={(item, index) => this.state.current_order.product_list.indexOf(item).toString() }
                                        />  
                                    ) :
                                    (
                                        console.log('empty')
                                    )
                                }
      

                            <TouchableOpacity style={globalStyles.buttonStyle2} onPress={ () => this.setState({show_cart:false})}>
                                    <View style={{ flex:1,flexDirection: "row", alignItems: "center"}}>
                                        <Text style={{color:'white', fontWeight:'bold'}}>Confirmar Pedido</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        </View>

                    </Modal>
                    <View style={{flex:1}}>
                        <FlatList
                            ListHeaderComponent={this.headerLayout}
                            ListFooterComponentStyle={{height:100}}
                            data={this.state.product_list}
                            renderItem={this.thirdLayout}
                            keyExtractor={item => item.id}
                            />
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={ () => this.setState({show_cart:true})}
                        style={styles.TouchableOpacityStyle}>

                                    <Icon name='shopping-cart' type="feather" size={25} color={'white'}  />
                                    <Badge
                                        value={this.state.current_order ? (this.state.current_order.product_list.length) :  0 }
                                        status="warning"
                                        containerStyle={{ position: 'absolute', top: 0, right: 0 }}
                                    />
                        
                        </TouchableOpacity>
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
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 20,
        bottom: 20,
        backgroundColor: green_color,
        borderRadius: 25,
      },
    
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        backgroundColor:'black'
      },
      modalView: {
        margin:10,
        alignItems:'stretch',
        flex:1,
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      centeredView: {
        flex: 1,
        marginTop: 22
      },
    
});
export default ProductList;