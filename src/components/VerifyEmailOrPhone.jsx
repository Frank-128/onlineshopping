import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'

const VerifyEmailOrPhone = ({route}) => {
  const emailOrPhone = route.params.emailOrPhone
  const isEmail = route.params.isEmail
  return (
    <SafeAreaView className='items-center pt-36 flex-1 px-6'>
      <Text className='text-3xl font-bold'>Verify {isEmail}</Text>
      <Text className='px-3 text-lg'>To verify your {isEmail} we have sent a one time password to your {emailOrPhone} {isEmail}</Text>
      <View className='px-2 py-4 w-full gap-y-4'>
        <Text className='font-bold text-center p-2 text-lg'>Enter OTP</Text>
      <OtpInput numberOfDigits={4} onTextChange={(text)=>console.log(text)} />
      <View>
        <View className='bg-[#feba0c]' style={{borderRadius:10}}>
        <Text disabled className='text-center p-4'>Create your account</Text>
        </View>
        </View>
      <Text>By creating an account you agree to the condition of use and privacy notice</Text>
      <Text className='font-extrabold text-center'>Resend OTP</Text>
      </View>
    </SafeAreaView>
  )
}

export default VerifyEmailOrPhone