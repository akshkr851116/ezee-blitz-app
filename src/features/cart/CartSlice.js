import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
const initialState = {
	cartItems: [],
	cartNumbers: { subtotal: 0, shipping: 0, tax: 0, total: 0 },
};
export const cartSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			let {payload:item}=action;
			console.log("addToCart",item);
			state.cartItems.push({...item,quantity:1})
		},
		removeFromCart: (state, action) => {
			let {payload:item}=action;
			let index=state.cartItems.findIndex((cartItem)=>cartItem.id===item.id);
			state.cartItems.splice(index,1)
			
		},
		setQuantity:(state,action)=>{
			let {qty,item}=action.payload;
			console.log("setQty called",qty,item.name)
		state.cartItems=state.cartItems.map((cartItem)=>{
				return cartItem.id===item.id?{...cartItem,quantity:cartItem.quantity + qty}:cartItem;
			});
			state.cartItems=state.cartItems.filter((cartItem)=>cartItem.quantity>=1)
		},
		
		setCartNumbers:(state)=>{
			let subtotal=0,shipping=0,tax=0,total=0;
			for (let item of state.cartItems){
				subtotal += item.quantity * item.price;
				shipping += item.quantity*40;
			}
			tax=(subtotal * 18)/100;
			total=subtotal + shipping + tax;
			state.cartNumbers={subtotal,shipping,tax,total}
		}
	},

});
export const { addToCart, removeFromCart,setQuantity,setCartNumbers } = cartSlice.actions;
export default cartSlice.reducer;