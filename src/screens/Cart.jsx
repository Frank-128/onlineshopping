import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useGlobal } from '../core/global'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCancel, faPencil, faRemove } from '@fortawesome/free-solid-svg-icons'

const Cart = ({navigation}) => {
    const cart = useGlobal((state)=>state.cart)
    const remove_from_cart = useGlobal((state)=>state.remove_from_cart)
    
  return (
    <View>
      <View className='fixed px-4'>
        <Text></Text>
      <Text className='text-center'>MyCart</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('CustomerHome')}>
      <Text className='self-end text-[#e79951] py-2'>continue shopping</Text>
      </TouchableOpacity>
      {
        cart.length > 0 && <Text className='bg-[#d9d9d9] text-center p-3'>Proceed to payments</Text>
      }
      </View>
        <View className='pt-4'>
      <ScrollView className='grid grid-row-1 h-[82%] space-y-1'>
      {cart.length > 0 ?cart?.map((i,index)=>  <View key={index} className='flex-row gap-2 border-y-[.5px] border-gray-200'>
            <Image source={i.img} className='w-16 h-16' />
            <View>
                <Text className='font-bold'>{i.name}({i.quantity})</Text>
                <Text>{i.colors.toString()}</Text>
                <Text>{i.size.toString()}</Text>
            </View>
            <View className='flex-row flex-1 pr-5 justify-end  items-center gap-x-5'>
                <TouchableOpacity className='bg-red-200  items-center justify-center w-4 h-4 p-3 ' onPress={()=>navigation.navigate('ProductDetail',{orderItem:i})}><Text ><FontAwesomeIcon icon={faPencil} /></Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>remove_from_cart(i.id)}><FontAwesomeIcon icon={faRemove} /></TouchableOpacity>
            </View>
        </View>): <View className='items-center'>
        
        <View className='bg-[#bedbfe] h-48 w-48 items-center justify-center' style={{borderRadius:100}}>
        <Image source={require('../assets/products/cart.png')}  className='w-28 h-28 ' />
          </View>
        <Text className='text-xl py-2'>Your cart is empty</Text>
        <Text>Nothing is here only possibilities</Text>
          <Text>shop today's deals</Text>
          </View>
          }
          </ScrollView>
        </View>
    </View>
  )
}

export default Cart