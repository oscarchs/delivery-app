import React, {Component, Profiler} from 'react';
import { StyleSheet,View, Text, Image } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import { Icon } from 'react-native-elements';

import Authentication from './Authentication/AuthLoading';
import Login from './Authentication/Login';
import ClientHome from './Client/Home';
import ClientOrders from './Client/Orders';
import ClientAddresses from './Client/Addresses';
import Profile from './Client/Profile';
import StoreList from './Client/StoreList';
import ProductList from './Client/ProductList';
import ProductDetail from './Client/ProductDetail';

import { RegistryForm, ConfirmationCode } from './Authentication/Registry';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerLayout from './Components/DrawerLayout';
import HeaderLayout from './Components/HeaderLayout';


const dark_green_color = '#264653';
const green_color = '#2a9d8f';
const orange_color = '#e76f51';
const light_orange = '#f4a261'
const yellow_color = '#e9c46a';

const styles = StyleSheet.create({  
    header: {
      backgroundColor: '#517fa4',
    },
    header_text: {
      color:'white',
      textAlign: 'center',
      fontSize: 14,
    }
  });

  _CurrentUser = async() => {
    var current_user = await AsyncStorage.getItem('current_user');
    return JSON.parse(current_user);
  }

  const ShoppingStack = createStackNavigator({
    ClientHome: {
      screen: ClientHome,
      navigationOptions:{
        headerTitle:'Bienvenido',
        headerTitleAlign:'left',
        headerTitleAllowFontScaling:true,
      },
    },
    StoreList: {
      screen: StoreList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam('category_label','unknown'),
        headerTitleAllowFontScaling:true,
        headerBackTitle:'Principal',
      }),
    },
    ProductList: {
      screen: ProductList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam('store_data','unknown').name,
        headerTitleAllowFontScaling:true,
        headerBackTitle:'Atrás',
        cartItems: navigation.getParam('cart_items',0),
      }),
    },
    ProductDetail: {
      screen: ProductDetail,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam('product_data','unknown').name,
        headerTitleAllowFontScaling:true,
        headerBackTitle:'Atrás',
        cartItems: navigation.getParam('cart_items',0),
      }),
    },
  },  {
    initialRouteName: 'ClientHome',
    backBehavior:'history',
    defaultNavigationOptions: {
      header: (props) => {
        return(
          <HeaderLayout {...props}/>
        );
      }
    },
  });

const ClientMenu = createDrawerNavigator({
    ClientHome: {
      screen: ShoppingStack,
      navigationOptions:{
        drawerLabel: 'Inicio'
      }
    },
    ClientOrders: {
      screen: ClientOrders,
      navigationOptions:{
        drawerLabel: 'Pedidos'
      }
    },
    ClientAddresses: {
      screen: ClientAddresses,
      navigationOptions:{
        drawerLabel: 'Direcciones'
      }
    },
    ClientProfile: {
      screen: Profile,
      navigationOptions:{
        drawerLabel: 'Datos personales'
      }
    },
  },{
    contentComponent: (props) =>{
      return(
        <DrawerLayout {...props}/>
      );
    }
  }
);

  const LoginStack = createStackNavigator({
    Login: {
      screen: Login,
    },
    RegistryForm: {
      screen: RegistryForm,
    },
    ConfirmationCode: {
      screen: ConfirmationCode,
    },
  },  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
        header: null,
      },
  });

  const AuthenticationStack = createStackNavigator({
    Authentication:{
      screen: Authentication,
    }
  },
  {
    initialRouteName: 'Authentication',
    defaultNavigationOptions: {
      header: null,
    },

  });

const AppNavigation = createAppContainer(createSwitchNavigator({
    Authentication: AuthenticationStack,
    Login: LoginStack,
    ClientMenu: ClientMenu,
    },
)
);

export default AppNavigation;

