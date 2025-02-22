import axios from 'axios'

export const fetchProducts= ()=>async (dispatch)=>{
  dispatch({type:'FETCH_PRODUCTS_LOADING'})
  try{
    const {data} = await axios.get('https://fakestoreapi.com/products');
    dispatch({type:'FETCH_PRODUCTS_SUCCESS' , payload:data});
  }catch(error){
   dispatch({type:'FETCH_PRODUCTS_FAILURE' , payload:error.message});
  }
};