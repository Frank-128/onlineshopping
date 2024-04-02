import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const Payments = () => {
  const [selectedPayment,setSelectedPayment] = useState("")

  const payments = [
    {
      name: 'Airtel Money',
      img: require('../assets/payments/airtel.png'),
    },
    {
      name: 'Mpesa',
      img: require('../assets/payments/mpesa.png'),
    },
    {
      name: 'Tigo pesa',
      img: require('../assets/payments/tigopesa.png'),
    },
    {
      name: 'Visa',
      img: require('../assets/payments/visa.jpg'),
    },
    {
      name: 'Mastercard',
      img: require('../assets/payments/mastercard.jpg'),
    },
  ];
  
  return (
    <SafeAreaView>
      <Text className="text-center font-bold text-xl">
        Select a payment method
      </Text>
    <RadioButton.Group onValueChange={payment => setSelectedPayment(payment)} value={selectedPayment}>
      <View className="items-center">
        {payments.map(({img, name}, index) => (
         <TouchableOpacity key={index} onPress={()=>setSelectedPayment(name)}>
           <View
            
            className="flex-row justify-between   border-[0.5px] p-3 w-full">
            <View className="flex-row gap-x-2 items-center ">
            <Image source={img} className="w-10  h-10 object-contain" />
            <Text className='text-xl'>{name}</Text>
            </View>
              <RadioButton value={name} color="#007BFF" uncheckedColor="#123456"  />
          </View>
         </TouchableOpacity>
        ))}
      </View>
      </RadioButton.Group>
      <View className='p-2'>
        <View style={{borderRadius:20}} className='bg-[#feba0c]'>
        <Text className='text-center p-4 '>Continue</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payments;
