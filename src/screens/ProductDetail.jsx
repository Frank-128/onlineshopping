import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useStore} from 'zustand';
import {useGlobal} from '../core/global';
import {products} from '../assets/data';
import {useFocusEffect} from '@react-navigation/native';

const ProductDetail = ({navigation, route}) => {
  const order = route.params.orderItem;
  const [orderDetail, setOrderDetail] = useState(
    order === undefined ? {colors: [], quantity: 0, size: []} : order,
  );
  const item =
    order === undefined
      ? route.params
      : products.filter(item => item.id === order.id)[0];
  const add_to_cart = useGlobal(state => state.add_to_cart);
  const modify_cart = useGlobal(state => state.modify_cart);

  useFocusEffect(
    React.useCallback(() => {
      console.log('triggered from the useFocusEffect');
      setOrderDetail(
        order === undefined ? {colors: [], quantity: 0, size: []} : order,
      );

      return () => {
        console.log('console.logged the cleanup function');
        setOrderDetail({colors: [], quantity: 0, size: []});
      };
    }, [route]),
  );
  console.log('-----------//order is //--------------');
  console.log(order);
  console.log('-----------//order end //--------------');
  console.log('hello');
  console.log('-----------//orderDetail is //--------------');
  console.log(orderDetail);
  console.log('-----------//orderDetail end //--------------');

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('CustomerHome')}>
        <Text className="self-end text-[#e79951] px-4 py-2">
          continue shopping
        </Text>
      </TouchableOpacity>
      <View className="p-3 items-center">
        <Image source={item.img} className="w-36 h-36" />
      </View>
      <View className="items-center ">
        <Text>colors:</Text>
        <View className="flex-row justify-evenly py-2 gap-4">
          {item.colors?.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                setOrderDetail({
                  ...orderDetail,
                  colors: orderDetail.colors?.includes(color)
                    ? orderDetail.colors.filter(
                        itemColor => itemColor !== color,
                      )
                    : [...orderDetail.colors, color],
                })
              }>
              <View
                className={`w-10 h-10 ${
                  orderDetail.colors.includes(color)
                    ? 'border-2 border-black scale-110'
                    : ''
                }`}
                style={{backgroundColor: color}}></View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View className="items-center ">
        <Text>Size:</Text>
        <View className="flex-row justify-evenly py-2 gap-4">
          {item.size.length > 0 &&
            item.size?.map((size, index) => (
              <TouchableOpacity
              key={index}
              onPress={() =>
                setOrderDetail({
                  ...orderDetail,
                  size: orderDetail.size?.includes(size)
                    ? orderDetail.size.filter(
                        itemSize => itemSize !== size,
                      )
                    : [...orderDetail.size, size],
                })
              }>
              <View
                key={index}
                className={`${orderDetail.size.includes(size)?'bg-blue-100':""} w-10 h-10 border items-center justify-center `}>
                <Text className="text-lg font-bold">{size}</Text>
              </View>
            </TouchableOpacity>
            ))}
        </View>
      </View>
      <View className="px-4">
        <View className="flex-row">
          <Text className="text-2xl font-medium">{item.discount}</Text>
        </View>
        <View className="flex-row">
          <Text className="">
            {item.price} shipping and importing fees deposits to United republic
            of Tanzania
          </Text>
        </View>
      </View>
      <View className="px-4 ">
        <TouchableOpacity>
          <View className="flex-row self-center items-center gap-4 py-2">
            <TouchableOpacity
              disabled={orderDetail.quantity < 1}
              onPress={() =>
                setOrderDetail({
                  ...orderDetail,
                  quantity: orderDetail.quantity - 1,
                })
              }>
              <Text className="bg-[#e7ffff] px-4 py-2">-</Text>
            </TouchableOpacity>
            <Text>Quantity : {orderDetail.quantity}</Text>
            <TouchableOpacity
              onPress={() =>
                setOrderDetail({
                  ...orderDetail,
                  quantity: orderDetail.quantity + 1,
                })
              }>
              <Text className="bg-[#e7ffff] px-4 py-2">+</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={orderDetail.quantity == 0}
          onPress={() => {
            order === undefined
              ? add_to_cart({...item, ...orderDetail})
              : modify_cart(orderDetail);
            navigation.navigate('Cart');
            setOrderDetail({colors: [], quantity: 0, size: []});
          }}>
          <Text
            className={`${
              order === undefined ? 'bg-[#feba0c]' : 'bg-blue-200'
            } p-2 text-center flex w-full`}>
            {order !== undefined ? 'Modify Order' : 'Add to Cart'}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
