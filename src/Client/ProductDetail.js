import React from 'react';
import { StyleSheet, Text, View, StatusBar,
    TextInput, TouchableOpacity,
    Image, FlatList, TouchableHighlight, ImageBackground, Picker} from 'react-native';
    import { Icon } from 'react-native-elements';

    const dark_green_color = '#264653';
    const green_color = '#2a9d8f';
    const orange_color = '#e76f51';
    const light_orange = '#f4a261'
    const yellow_color = '#e9c46a';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as Yup from "yup";
import globalStyles from '../Styles/globalStyles';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import AsyncStorage from '@react-native-community/async-storage';



const color_theme = green_color; 

class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_user : '',
            spinner: false,
            product_data:'',
            product_variations:[{
                    name:'Variantes',
                    id:0,
                    variants_list:
                        [
                            { id:"1",name:'Variation 1', price:"0" },
                            { id:"2",name:'Variation 2', price:"11.5" },
                            { id:"3",name:'Variation 3', price:"2.5" }
                        ]
                }
            ],
            product_additionals:[{
                name:'Adicionales',
                id:0,
                additionals_list:
                        [
                            { id:"1",name:'Additional 1', price:"1.4" },
                            { id:"2",name:'Additional 2', price:"1.3" },
                            { id:"3",name:'Additional 3', price:"1.1" },
                        ]
            }],

            product_item:'',
            shopping_cart_state:'',

            selected_variation: [],
            selected_additionals: [],

            selected_additionals_: [],

            variant_price: null,
            additional_price: 0,

            selected_variation_object: [],
            selected_additionals_objects: [],

        };
    }
    
    componentDidMount = () =>{
        this.setState({product_data:this.props.navigation.getParam('product_data','no_data')});
        console.log('product selected, now setting details');
    }

    onSelectedVariant = (variant) => {
        if ( variant == this.state.selected_variation[0] ){
            this.setState({selected_variation:[]})
        }
        else{
            this.setState({selected_variation:variant});
        }
    }

    onSelectedVariationChangeObject = (variant) => {
        if( variant[0] == this.state.selected_variation_object[0] ){
            this.setState({selected_variation_object:[]})
            this.setState({variant_price:null});
        }
        else{
            this.setState({selected_variation_object:variant });
            this.setState({variant_price:parseFloat(variant[0].price)});
        }
    }

    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selected_additionals:selectedItems})
      };

    onSelectedAdditionalsChangeObject = (additionals) => {
        this.setState({selected_additionals_objects: additionals});
        let additional_price = 0;
        for(let i = 0; i < additionals.length ; i++ ){
            additional_price += parseFloat(additionals[i].price);
        }
        this.setState({additional_price:additional_price});
    }
    



    handleSubmit = async() => {
        let shopping_item = {
            product_id: this.state.product_data.id,
            product_name: this.state.product_data.name,
            variants: this.state.selected_variation_object,
            additionals: this.state.selected_additionals_objects,
            unit_price: this.state.product_data.unit_price,
            final_price: ( this.state.variant_price || parseFloat(this.state.product_data.unit_price) ) + this.state.additional_price, 
        }
        let current_order = await AsyncStorage.getItem('current_order', null);
        if( current_order ){
            current_order = JSON.parse(current_order);
            current_order.product_list.push(shopping_item);
            AsyncStorage.setItem('current_order', JSON.stringify(current_order));
            this.props.navigation.goBack(null);
        }
        console.log( current_order );
    }
    render(){
        return(
        
            <View style={{flex:6}}>
                    <View style={{flex:1.5}}>
                        <ImageBackground source={{uri:this.state.product_data.artwork}} style={{flex:1.5,resizeMode: "cover",opacity:1}}>
                            <LinearGradient colors={['rgba(255,255,255,0)', yellow_color]} style={{flex:1,flexDirection: 'column', justifyContent:'flex-end'}}>
                                <Text style={{color:'white'}}>{this.state.product_data.name}</Text> 
                            </LinearGradient>
                        </ImageBackground>
                    </View>

                    
                    <View style={{flex:3, marginTop:20}}>
                                <SectionedMultiSelect
                                    single
                                    showRemoveAll={true}
                                    
                                    hideSearch
                                    expandDropDowns
                                    colors={{primary:green_color}}
                                    styles={{confirmText:{fontSize:14}, selectToggle:{  margin:10, padding:13,alignContent:'center', borderWidth:1, borderColor:green_color, borderRadius:25}, button:{borderRadius:25, margin:10}, container:{borderRadius:25, borderWidth:1, borderColor:green_color}}}
                                    items={this.state.product_variations}
                                    uniqueKey="id"
                                    subKey="variants_list"
                                    selectText={ "Variantes" || this.state.selected_variation }
                                    confirmText={'Aceptar'}
                                    showDropDowns={true}
                                    readOnlyHeadings={true}
                                    onSelectedItemsChange={this.onSelectedVariant}
                                    onSelectedItemObjectsChange={ selected =>  this.onSelectedVariationChangeObject(selected) }
                                    selectedItems={this.state.selected_variation}
                                    />
                                <SectionedMultiSelect
                                    hideSearch
                                    expandDropDowns
                                    colors={{primary:green_color}}
                                    styles={{confirmText:{fontSize:14}, selectToggle:{  margin:10, padding:13,alignContent:'center', borderWidth:1, borderColor:green_color, borderRadius:25}, button:{borderRadius:25, margin:10}, container:{borderRadius:25, borderWidth:1, borderColor:green_color}}}
                                    items={this.state.product_additionals}
                                    uniqueKey="id"
                                    subKey="additionals_list"
                                    selectText="Adicionales"
                                    confirmText={'Aceptar'}
                                    showDropDowns={true}
                                    readOnlyHeadings={true}
                                    onSelectedItemsChange={this.onSelectedItemsChange}
                                    onSelectedItemObjectsChange={ selected => this.onSelectedAdditionalsChangeObject(selected) }
                                    selectedItems={this.state.selected_additionals}
                                    />
                                <TouchableOpacity style={globalStyles.buttonStyle2} onPress={this.handleSubmit}>
                                    <View style={{ flex:1,flexDirection: "row", alignItems: "center"}}>
                                        <Text style={{color:'white', fontWeight:'bold'}}>Agregar a mi pedido</Text>
                                    </View>
                                </TouchableOpacity>

                    </View>
                    <View style={{flex:1.5}}>

                    </View>
            </View>

            
            );
    }
}


export default ProductDetail;