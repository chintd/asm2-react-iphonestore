import { createSlice, configureStore } from '@reduxjs/toolkit';
// tao slice cho popupmodal
const modalSlice = createSlice({
  name: 'modal',
  initialState: { showModal: false , item : {}},
  reducers: {
    showPopUp: (state,action) =>{
      state.showModal = true;
      state.item = action.payload;   
      return state;
    },
    hidePopUp: (state) => {
      state.showModal = false; 
      return state;
    }
  }
})
export const modalAction = modalSlice.actions;
// tao slice cho cart 
const cartSlice= createSlice({
  name:"cart",
  initialState: {items:[], total: 0 },
  reducers:{
    addCart: (state,action)=>{
      const updateTotal = state.total + action.payload.price * Number(action.payload.amount);
      const itemIndex = state.items.findIndex((el)=>
        el["_id"]["$oid"] === action.payload["_id"]["$oid"]
      )
      const existedItem = state.items[itemIndex];    
      let updatedItems;
      if(-1 !== itemIndex){
        const updatedItem = {
          ...existedItem,
          amount: Number(existedItem.amount) + Number(action.payload.amount),
        };
        updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedItem;
      }else {
        updatedItems = state.items.concat(action.payload);
      }
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      localStorage.setItem('total', JSON.stringify(updateTotal))
      return {
        items: updatedItems,
        total: updateTotal
      }
    },
    updateCart:(state,action)=>{
      const existingCartItemIndex = state.items.findIndex(
        (item) =>{
          return item["_id"]["$oid"] === action.payload["_id"]["$oid"]}
      );
      let existingItem = state.items[existingCartItemIndex];
      console.log(existingItem,'exitem')
      let updatedItems;
      let updateTotal=[];
      if(action.payload.amount === 0){
        updatedItems = state.items.filter(item => item["_id"]["$oid"] !== action.payload['_id']["$oid"]);
        updateTotal = state.total - action.payload.price;       
      }else{
        existingItem ={
            ...existingItem,
            amount : action.payload.amount
          }
          console.log(existingItem, 'existedItem update')
           updatedItems = [...state.items];
          updatedItems[existingCartItemIndex]=existingItem;    
          updateTotal= updatedItems.map((cur)=>{
            return cur.price * cur.amount
          }).reduce((acc,cur)=>acc+Number(cur),0)
          console.log(updateTotal,"acc")
      }
      localStorage.setItem('cart', JSON.stringify(updatedItems));
        localStorage.setItem('total', JSON.stringify(updateTotal))
      return {
        items: updatedItems,
        total: updateTotal
      }
    },
    deleteCart:(state,action)=>{
      
      const existingCartItemIndex = state.items.findIndex(
        (item) => item["_id"]["$oid"] === action.payload["_id"]["$oid"]
      );
      const existingItem = state.items[existingCartItemIndex];
      let updatedTotalAmount = state.total - existingItem.price *action.payload.amount;
      let updatedItems;
        updatedItems = state.items.filter(item => item["_id"]["$oid"] !== action.payload['_id']["$oid"]);    
        console.log(updatedItems,'itemsss');
        // const item = state.items.find(item=> item["_id"]["$oid"] === action.payload["_id"]["$oid"]);
        // item.amount = 0;
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        localStorage.setItem('total', JSON.stringify(updatedTotalAmount))
        return {
        items: updatedItems,
        total: updatedTotalAmount
      };
    }
  }
})
export const cartAction = cartSlice.actions;


const store = configureStore({
    reducer:{
        modal: modalSlice.reducer,
        cart: cartSlice.reducer
    }
})
export default store;


