import { updateQuantity } from '@/redux/actions/cartActions';
import { Button, VStack ,Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum , item)=> sum + (item.price * item.quantity) , 0);

  return (
   <>
  <VStack  spacing={4} p={4}>
    {cart.map(item => (
      <div key={item.id}>
        <Text>{item.title}</Text>
        <NumberInput value={item.quantity}
        onChange={(value)=>dispatch(updateQuantity(item.id, parseInt(value)))}
        >
         < NumberInputField/>
        </NumberInput>
<Text>${(item.price *item.quantity).toFixed(2)}</Text>
      </div>
    ))}
    <Text fontSize="xl">Total:${total.toFixed(2)}</Text>
    <Button colorScheme="blue">Checkout</Button>
    </VStack> 
   </>
  )
}

export default Cart