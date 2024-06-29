import React from 'react'
import { addToCart,removeFromCart } from '../../features/cart/CartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


function ButtonProduct(props) {
  const {cartItems}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  const handleAddClick=()=>{
    dispatch(addToCart(props.product));
  }
  const handleRemoveClick=()=>{
    dispatch(removeFromCart(props.product))
  }
  const isPresentInCart=Boolean(cartItems.find((item)=>item.id===props.product.id));
  //true and false retu
 if (isPresentInCart){
  return (
    <div>
        <button onClick={handleRemoveClick} className='btn btn-outline-danger d-block w-100 '>Remove to Cart</button>
      
    </div>
  )

 }
 else {
  return (
    <div>
        <button onClick={handleAddClick} className='btn btn-outline-success d-block w-100 '>Add to Cart</button>
      
    </div>
  )
 }
}

export default ButtonProduct
