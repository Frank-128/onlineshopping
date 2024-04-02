import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import countryList from 'react-select-country-list'
import DropDown from 'react-native-paper-dropdown'
import { Provider } from 'react-native-paper'

const SellPage = ({navigation}) => {
    const [showDropDown,setShowDropDown] = useState(false)
    const [country,setCountry] = useState("")

    const options = React.useMemo(()=>countryList().getData(),[])
  return (
   <Provider>
     <SafeAreaView>
        <View className='gap-2 mt-20'>
        <Text className='text-center text-xl'>Start selling with our website</Text>
      <Text className='text-center'>You must verify your bussiness</Text>
      <Text className='text-center'>Bussiness location</Text>
     <View className='px-2'>
     <DropDown
              label={"Select a country"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={country}
              setValue={setCountry}
              list={options}
            />
     </View>
     <Text className='px-2 py-2'>
        By clicking begin you agree to the conditions of use and privacy notice
     </Text>

     <TouchableOpacity onPress={()=>navigation.navigate('AddProduct')}>
        <View className='px-2'>
            <View className='bg-[#2b96d2]' >
                <Text className='text-center p-4'>Begin</Text>
            </View>
        </View>
     </TouchableOpacity>
        </View>


    </SafeAreaView>
    </Provider>
  )
}

export default SellPage