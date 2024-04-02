import { create } from "zustand"
import EncryptedStorage from "react-native-encrypted-storage"

export const useGlobal = create((set)=>({
    cart:[],
    user:null,
    fetchUser: async () => {
      try {   
          const session = await EncryptedStorage.getItem("user_session");
      
          if (session == undefined) {
              set({ user: null });
          } else {
              const session_obj = JSON.parse(session)
              set({ user: session_obj });
          }
      } catch (error) {
          // Handle errors
          console.error("Error fetching user session:", error);
      }
  },
  login: (user) => set(async (state) => {
      try {
          await EncryptedStorage.setItem(
              "user_session",
              JSON.stringify({
                  age : user.age,
                  token : user.token,
                  username : user.name,
              })
          );
          state.fetchUser()
          return {...state,user:user}
      } catch (error) {
          console.log(error);
      }
  }),
  logout:()=>set(async(state)=>{

    try{await EncryptedStorage.clear()}
    catch(error){
        console.log(error)
    }
    return {...state,user:null}
  } )
  ,
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
