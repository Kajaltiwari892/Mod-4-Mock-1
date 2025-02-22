import { fetchProducts } from '@/redux/actions/productActions';
import { SimpleGrid  } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '@/MyComponents/ProductCard';

const Products = () => {
  const dispatch = useDispatch();
  const {products , loading , error} = useSelector(state => state.products);

  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch]);

  if(loading)  return <Spinner/>;
  if(error)  return <Alert statua="error"></Alert>

  return (
    <>
    <SimpleGrid columns={[1 , 2, 3]} spacing={4} p={4}>
      {products.map(product =>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </SimpleGrid>
    </>
  )
}

export default Products