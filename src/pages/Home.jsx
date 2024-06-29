import React from 'react'
import Products from '../components/products/Products'
import { useSelector } from 'react-redux';
function Home() {
  const { productsFromSearch } = useSelector((state) => state.products);
	return <Products products={productsFromSearch} />; 
}
export default Home
