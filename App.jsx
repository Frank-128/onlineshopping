import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
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
import Payments from './src/screens/Payments';
import SellPage from './src/screens/SellPage';
import AddProduct from './src/screens/AddProduct';
import SignUp from './src/components/SignUp';
import VerifyEmailOrPhone from './src/components/VerifyEmailOrPhone';
import SignIn from './src/components/SignIn';
import { useGlobal } from './src/core/global';
import Splash from './src/screens/Splash';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const setIt = false;

const App = () => {
  const fetchUser = useGlobal(state=>state.fetchUser)
  const [showSplash,setShowSplash] = useState(true)

  

  useEffect(()=>{
    setShowSplash(false)
    fetchUser()
  },[])

  return (
    <NavigationContainer>
      {showSplash ? (
        <Stack.Navigator>
          <Stack.Screen component={Splash} name="Splash" options={{headerShown:false}} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          drawerContent={DrawerContentItems}
          screenOptions={{header: () => <Navbar />}}>
          <Drawer.Screen component={CustomerHome} name="CustomerHome" />
          <Drawer.Screen
            component={AddProduct}
            name="AddProduct"
            options={{headerShown: false}}
          />
          <Drawer.Screen
            component={SellPage}
            name="SellPage"
            options={{headerShown: false}}
          />
          <Drawer.Screen
            component={Payments}
            name="Payments"
            options={{headerShown: false}}
          />
          <Drawer.Screen
            component={Authentication}
            name="Auth"
            options={{headerShown: false}}
          />
          <Drawer.Screen component={ProductDetail} name="ProductDetail" />
          <Drawer.Screen
            component={ShippingAddress}
            name="ShippingAddress"
            options={{headerShown: false}}
          />

          <Drawer.Screen component={Cart} name="Cart" />
          <Drawer.Screen
            component={SignUp}
            name="SignUp"
            options={{headerShown: false}}
          />
          <Drawer.Screen
            component={VerifyEmailOrPhone}
            name="VerifyEmailOrPhone"
            options={{headerShown: false}}
          />
          <Drawer.Screen
            component={SignIn}
            name="SignIn"
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
