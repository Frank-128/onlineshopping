import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');

  return (
    <SafeAreaView className="gap-2">
      <Text className="text-center p-2">
        Create new account to onlineshopping
      </Text>
      <View className="px-2 ">
        <Text>First and last name</Text>
        <TextInput className="border px-2 py-4" />
      </View>
      <View className="px-2 ">
        <Text>Email or Mobile number </Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={setEmailOrPhone}
          className="border px-2 py-4"
        />
      </View>

      <View className="px-2 ">
        <Text>Password</Text>
        <TextInput className="border px-2 py-4" />
      </View>
      <View className="px-2 ">
        <Text>Confirm Password</Text>
        <TextInput className="border px-2 py-4" />
      </View>
      <View className="px-2">
        <View className="bg-[#feba0c] border" style={{borderRadius: 10}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Auth', {
                screen: 'VerifyEmailOrPhone',
                params: {
                  emailOrPhone,
                  isEmail: emailOrPhone?.includes('@')
                    ? 'email address'
                    : 'Phone number',
                },
              })
            }>
            <Text className="p-4 text-center">
              Verify{' '}
              {emailOrPhone?.includes('@') ? 'email address' : 'Phone number'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="px-2 gap-y-2">
        <Text>
          By continuing you agree to the conditions of use and Privacy Notice
        </Text>
        <View className="flex-row gap-x-1">
          <Text>Already a customer?</Text>
          <Text className="text-[#feba0c] italic">sign in</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
