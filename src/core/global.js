import { create } from "zustand"
export const useGlobal = create((set)=>({
    cart:[],
    add_to_cart:(item)=> set((state)=>({cart:[...state.cart,item]})),
    modify_cart:(item)=>set((state)=> {
      const itemIndex = state.cart.findIndex((itemValue)=>itemValue.id == item.id)
      if(itemIndex === -1){
        return state
      }
      else{
        const newArray = [...state.cart]
        newArray[itemIndex] = item 
        return {cart:newArray}
      }
    }),
    remove_from_cart: (productId)=>set((state)=>({
     cart:state.cart.filter((item)=>item.id !== productId)
    }))

  }))
