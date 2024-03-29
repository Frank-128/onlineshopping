import {View, Text, StyleSheet, Platform, TextInput} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';

const ShippingAddress = () => {
  return (
    <View className="px-6 py-4 bg-white flex-1">
      <Text className="font-bold text-center py-2">
        Enter a new shipping address
      </Text>
      <View
        style={[styles.box, Platform.OS === 'android' && styles.androidShadow]}>
        <Text className="py-3 text-center ">Use current location</Text>
      </View>
      <View className="flex-row items-center py-2 justify-around ">
        <View className="bg-black basis-2/5 h-[1px] self-center"></View>

        <Text>OR</Text>
        <View className="bg-black w-2/5 h-[1px] self-center"></View>
      </View>
      <View
        style={[styles.box, Platform.OS === 'android' && styles.androidShadow]}>
        <Text className="py-3 text-center ">United states of America</Text>
      </View>
      <View className="px-2 py-4 gap-y-1">
        <Text>Fullname(Firstname and Lastname)</Text>
        <TextInput className="border px-2 py-2" />
      </View>
      <View className="px-2 py-2 gap-y-1">
        <Text>Phonenumber</Text>
        <TextInput className="border px-2 py-2" />
      </View>
      <View className="px-2 py-2 gap-y-1">
        <Text>Address</Text>
        <TextInput className="border px-2 py-2" />
      </View>
      <View className="px-2 py-2 gap-y-1">
        <Text>City</Text>
        <TextInput className="border px-2 py-2" />
      </View>
      <View className='flex-row gap-x-1 justify-between'>
      <View className="py-4 w-1/2 gap-y-1">
        <Text>State</Text>
        <TextInput className="border  py-2" />
      </View>
      <View className="py-4 w-1/2 gap-y-1">
        <Text>ZIP</Text>
        <TextInput keyboardType='numeric' className="border  py-2" />
      </View>
      </View>
      <View className='flex-row gap-x-2 py-1 items-center'>
      <CheckBox />
      <Text>Make this my default address</Text>
      </View>
      <View className='bg-[#feba0c]' style={{borderRadius:10}}>
        <Text  className='text-center p-4'>Use this address</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f2f0f0',
    borderRadius: 10,
    padding: 5,
    // Specify other common styles here
  },
  androidShadow: {
    elevation: 5, // Adjust the elevation to change the shadow effect
  },
});

export default ShippingAddress;
