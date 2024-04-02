import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'
import { useGlobal } from '../core/global'

const SignIn = () => {
  const [visible,setVisible] = useState(true)
  const [remember,setRemember] = useState(false)
  const [credentials,setCredentials] = useState({email:"",password:""})
  const [error,setError ] = useState({status:false,message:""})
  const navigation = useNavigation()
  const login = useGlobal((state)=>state.login)

  const handleSignIn = async()=>{
    console.log(credentials)
    if(credentials.email == "" || credentials.password == ""){
      setError({status:true,message:"email and password fields can not be empty"})
     return  
    }
    if(credentials.email === "test@gmail.com" && credentials.password === "1234"){
      setError({status:false,message:""})
      await login({name:"rico",token:"ACCESS_TOKEK",age:24})
      return navigation.navigate('CustomerHome')
    }
    setError({status:true,message:"email or password is incorrect"})
    return 
  }

  return (
    <SafeAreaView className='flex-1 justify-center gap-4'>
      <Text className='text-center text-2xl font-bold'>Sign in to onlineshopping</Text>
      <View className='px-6'>
        <Text className=''>email</Text>
        <TextInput onChangeText={(text)=>setCredentials({...credentials,email:text})} className='border px-4 py-2' />
      </View>
      <View className='px-6'>
        <Text className=''>password</Text>
        <View className='flex-row justify-between items-center border'>
        <TextInput onChangeText={(text)=>setCredentials({...credentials,password:text})} secureTextEntry={visible} className='flex-1 px-4 py-2' />
       <TouchableOpacity onPress={()=>setVisible(!visible)}> 
        <View className='p-2'><FontAwesomeIcon icon={visible?faEyeSlash:faEye}  color='black' /></View>
       </TouchableOpacity>
       
        </View>
      </View>
      {error.status && <Text className='text-center text-red-600'>{error.message}</Text>}
      <View className='px-6 flex-row gap-x-2 items-center'>
        <CheckBox disabled={false} value={remember} onValueChange={setRemember} />
        <Text className=''>Keep me signed in</Text>
      </View>
     <TouchableOpacity onPress={handleSignIn}>
     <View className='px-6'>
        <View className='bg-[#feba0c]' style={{borderRadius:10}}>
        <Text className='text-center p-4'>Sign in</Text>
        </View>
      </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><Text className='p-2 text-center'>Dont have an account? <Text className='text-[#feba0c] italic'>SignUp</Text></Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignIn