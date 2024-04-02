import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faCartShopping, faDashboard, faLocation, faMap, faMapLocation, faMapLocationDot, faSearch, faSignal, faSignal5, faSignalPerfect } from '@fortawesome/free-solid-svg-icons'
import { faDashcube, faSignalMessenger } from '@fortawesome/free-brands-svg-icons'
import { useGlobal } from '../core/global'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {
  const cart = useGlobal((state)=>state.cart)
  const user = useGlobal((state)=>state.user)
  const navigation = useNavigation()
 
  return (
    <SafeAreaView className='h-[9rem] fixed  bg-[#5e5b5b]'>
      <View className='flex-row p-4 justify-between '>
       <TouchableOpacity  onPress={()=>navigation.openDrawer()}>
        <Text> <FontAwesomeIcon icon={faBars} color='white' /></Text>
       </TouchableOpacity>
        <View className='flex flex-row gap-x-4'>
            {user !== null ? <Text className='text-white'>{user.username}</Text> :<TouchableOpacity onPress={()=>navigation.navigate('SignIn')}><Text className='text-white'>Sign In</Text></TouchableOpacity>}
           <TouchableOpacity onPress={()=>navigation.navigate('SellPage')}><Text className='text-white'>Sell</Text></TouchableOpacity> 
           <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
           <View className='relative' >
           <FontAwesomeIcon icon={faCartShopping} color='white' />
           {cart.length > 0 && <View className='absolute bottom-2 left-3 bg-[#e79951] w-4 h-4' style={{borderRadius:15}}>
           <Text className=' text-center text-white' style={{borderRadius:10}}>{cart.length}</Text>
           </View>}
           </View>
           </TouchableOpacity>
        </View>
      </View>
      <View className='flex-row h-8 px-4 flex w-full'>
        <TextInput className='bg-white p-2 w-[90%]'  placeholder='search products...' />
        <View className='bg-[#e79951] justify-center items-center w-[10%]'>
            <FontAwesomeIcon icon={faSearch} color='black' />
        </View>
      </View>
      <View className='text-white flex-row px-4 py-2 gap-x-2'>
        <FontAwesomeIcon icon={faLocation} color='white' />
        <Text className='text-white'>Deliver to Tanzania, United Republic ...</Text>
      </View>
    </SafeAreaView>
  )
}

export default Navbar