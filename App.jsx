import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Customer from './src/screens/ProductDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerHome from './src/screens/CustomerHome';
import Navbar from './src/components/Navbar';
import DrawerContentItems from './src/components/DrawerContentItems';
import ProductDetail from './src/screens/ProductDetail';
import {create} from 'zustand';
import Cart from './src/screens/Cart';
import Authentication from './src/screens/Authentication';
import ShippingAddress from './src/screens/ShippingAddress';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const setIt = false;

const App = () => {
  return (
    <NavigationContainer>
      {setIt ? (
        <Stack.Navigator>
          <Stack.Screen component={Customer} name="Home" />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          drawerContent={DrawerContentItems}
          screenOptions={{header: () => <Navbar />}}>
          <Drawer.Screen component={CustomerHome} name="CustomerHome" />
          <Drawer.Screen component={Authentication} name="Auth" options={{headerShown:false}}/>
          <Drawer.Screen component={ProductDetail} name="ProductDetail" />
          <Drawer.Screen component={ShippingAddress} name='ShippingAddress' options={{headerShown:false}} />
          
          <Drawer.Screen component={Cart} name="Cart" />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
