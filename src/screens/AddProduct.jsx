import {View, TextInput,Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons';
import {launchImageLibrary} from 'react-native-image-picker';


const AddProduct = ({navigation}) => {
  const [productImage, setProductImage] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const colors = [
    'red',
    'blue',
    'green',
    'orange',
    'indigo',
    'purple',
    'yellow',
    'black',
    'white',
    'gray',
  ];
  const size = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
  return (
    <SafeAreaView>
      <View className="flex-row self-end gap-2 items-center p-2">
        <FontAwesomeIcon icon={faAdd} />
        <Text>Add a new product</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          launchImageLibrary({includeBase64: true}, res => {
            if (res.didCancel) {
              return;
            }
            const file = res.assets[0];

            setProductImage(file);
          })
        }>
        <View className="items-center">
          {productImage == null ? (
            <Image
              source={require('../assets/products/add_product.png')}
              className="w-36 h-36"
            />
          ) : (
            <Image source={productImage} className="w-48 h-48" />
          )}
        </View>
      </TouchableOpacity>
     
     <View className="px-6 ">
        <Text>Name :</Text>
        <TextInput className="border p-2" />
      </View>
      <View className="px-6">
        <Text>Colors</Text>
        <View className="flex-row flex-wrap gap-x-7 gap-y-2 justify-between">
          {colors.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                selectedColors.includes(item)
                  ? setSelectedColors(prev => prev.filter(it => it !== item))
                  : setSelectedColors(prev => [...prev, item]);
              }}>
              <View
                style={{backgroundColor: item}}
                className={`border h-10 w-10 ${
                  selectedColors.includes(item) ? 'border-2 scale-110' : ''
                }`}></View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View className="px-6">
        <Text>Sizes</Text>
        <View className="flex-row  flex-wrap gap-x-4 gap-y-2 justify-between">
          {size.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                selectedSize.includes(item)
                  ? setSelectedSize(prev => prev.filter(it => it !== item))
                  : setSelectedSize(prev => [...prev, item]);
              }}>
              <View
                className={`border h-10 w-10 ${
                  selectedSize.includes(item)
                    ? 'border-2 scale-110 bg-blue-200'
                    : ''
                }`}>
                <Text className="text-center">{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      <View className='gap-y-2 py-2'>
      <View>
          <Text>Amount</Text>
          <TextInput className='border p-2' keyboardType="numeric" />
        </View>
        <View>
          <Text>Description</Text>
          <TextInput className='border p-2' />
        </View>
       <View className='flex-row w-full gap-x-2 justify-between'>
       <View className='w-2/5'>
          <Text>Discount</Text>
          <TextInput className='border p-2' keyboardType="numeric" />
        </View>
        <View className='w-2/5'>
          <Text>Quantity</Text>
          <TextInput className='border p-2' keyboardType="numeric" />
        </View>
       </View>
       <TouchableOpacity onPress={()=>navigation.navigate('CustomerHome')}>
        <View>
            <View className='bg-[#feba0c]' >
                <Text className='text-center p-4'>Add Product</Text>
            </View>
        </View>
     </TouchableOpacity>
      </View>
      </View>

   
     
         </SafeAreaView>
  );
};

export default AddProduct;

