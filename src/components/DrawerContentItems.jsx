import {View, Text} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { useGlobal } from '../core/global';

const DrawerContentItems = ({navigation}) => {
  const logout = useGlobal(state=>state.logout)
  const fetchUser = useGlobal((state)=>state.fetchUser)

  return (
    <DrawerContentScrollView>
      <Text className="text-xl">Your account</Text>
      <View className="px-2">
        <Text className="text-center">Orders</Text>
        <View className="border divide-y">
          <DrawerItem
            label={() => <DrawerContentItem itemLabel={'Your Orders'} />}
            onPress={() => navigation.navigate('CustomerHome')}
          />
          <DrawerItem
            label={() => <DrawerContentItem itemLabel={'Subscribe and save'} />}
            onPress={() => navigation.navigate('CustomerHome')}
          />
          <DrawerItem
            label={() => <DrawerContentItem itemLabel={'Service Request'} />}
            onPress={() => navigation.navigate('CustomerHome')}
          />
          <DrawerItem
            label={() => <DrawerContentItem itemLabel={'MyTradeInAccount'} />}
            onPress={() => navigation.navigate('CustomerHome')}
          />
        </View>
      </View>
      <View className="px-2 pt-4">
        <Text className="text-center">Customer services</Text>
        <View className="border divide-y">
          <DrawerItem
            label={() => <DrawerContentItem itemLabel={'Your Orders'} />}
            onPress={() => navigation.navigate('Contact Us')}
          />
         
        </View>
      </View>
      <View className="px-2 pt-4">
        <Text className="text-center">Account settings</Text>
        <View className="border divide-y">
          <DrawerItem
            label={() => <DrawerContentItem itemLabel={'Your Orders'} />}
            onPress={() => navigation.navigate('login & security')}
          />
          <DrawerItem
            label={() => <DrawerContentItem itemLabel={'Your Orders'} />}
            onPress={() => navigation.navigate('Your addresses')}
          />
        </View>
      </View>
      <View className="px-2 pt-4">
        <Text className="text-center">Payments</Text>
        <View className="border divide-y">
          <DrawerItem
            label={() => <DrawerContentItem itemLabel={'Payments'} />}
            onPress={() => navigation.navigate('CustomerHome')}
          />
         
        </View>
      </View>
      <View className="border  m-2 divide-y">
          <DrawerItem
            label={() => <DrawerContentItem itemLabel={'logout'} />}
            onPress={() =>{ logout();fetchUser();navigation.navigate('CustomerHome')}}
          />
         
        </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContentItems;

function DrawerContentItem({itemLabel}) {
  return (
    <View className="items-center">
      <Text>{itemLabel}</Text>
    </View>
  );
}
