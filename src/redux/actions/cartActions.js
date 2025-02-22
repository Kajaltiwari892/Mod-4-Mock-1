export const addToCart = (product) =>(dispatch,getState)=>{
  const existingItem = getState().cart.find(item.id === product.id);

  if (existingItem){
    dispatch(updateQuantity(product.id ,existingItem.quantity + 1));
  }else{
    dispatch({type:'ADD_TO_CART',payload:{...product, quantity:1}});
  }
};
export const removeFromCart =(productId) =>({
  type: 'REMOVE_FROM_CART',
  payload:productId
})

export const updateQuantity =(productId , quantity)=>({
  type:'UPDATE_QUANTITY',
  payload:{productId ,quantity}
});