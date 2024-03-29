import {View, Text, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {products} from '../assets/data';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const CustomerHome = ({navigation}) => {
  return (
    <View className=" px-4 flex-1">
      <Text className="text-xs fixed">
        Price and other details may vary based on color & size
      </Text>

      <ScrollView>
        <View className="flex-row flex-wrap justify-between pt-2">
          {products.map((item, index) => (
              <ProductItem navigation={navigation} key={index} item={item} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomerHome;

function ProductItem({navigation,item}) {
    const {name,rating,price,img} = item
  return (
   <TouchableOpacity onPress={()=>navigation.navigate('ProductDetail',item)}>
     <View className="bg-[#f3eeee] pb-4">
      <Image
        style={{width: 150, height: 150}}
        source={img}
      />
      <View className="space-y-1">
        <Text className="">{name}</Text>
        <Text>+27 colors/patterns</Text>
        <View className="flex-row gap-x-1">
          {Array(rating)
            .fill()
            .map((i, index) => (
              <FontAwesomeIcon key={index} icon={faStar} color="#ff8022" />
            ))}
        </View>
        <Text className="font-bold ">{price}/=</Text>
      </View>
    </View>
   </TouchableOpacity>
  );
}
