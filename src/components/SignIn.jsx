import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import CheckBox from '@react-native-community/checkbox'

const SignIn = () => {
  const [visible,setVisible] = useState(true)
  const [remember,setRemember] = useState(false)
  return (
    <SafeAreaView className='flex-1 justify-center gap-4'>
      <Text className='text-center text-2xl font-bold'>Sign in to onlineshopping</Text>
      <View className='px-6'>
        <Text className=''>email</Text>
        <TextInput  className='border px-4 py-2' />
      </View>
      <View className='px-6'>
        <Text className=''>password</Text>
        <View className='flex-row justify-between items-center border'>
        <TextInput secureTextEntry={visible} className='flex-1 px-4 py-2' />
       <TouchableOpacity onPress={()=>setVisible(!visible)}> 
        <Text className='p-2'><FontAwesomeIcon icon={visible?faEyeSlash:faEye}  color='black' /></Text>
       </TouchableOpacity>
       
        </View>
      </View>
      <View className='px-6 flex-row items-center'>
        <CheckBox disabled={false} value={remember} onValueChange={setRemember} />
        <Text className=''>Keep me signed in</Text>
      </View>
      <View className='px-6'>
        <View className='bg-[#feba0c]' style={{borderRadius:10}}>
        <Text className='text-center p-4'>Sign in</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn