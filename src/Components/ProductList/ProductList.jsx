import React, { useEffect, useState } from 'react';
import Shop from "/Images/Shop.png";
import Card from "../ProductCard/ProductCard";
import useStore from '../../store/project';
import "../ProductList/ProductList.css"

function ProductList({ selectedCategory }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addToCart = useStore((state) => state.addToCart);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory) 
    : products;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;




  return (

    <>
      <img src={Shop} alt="cover" className="cover-photo" /><div className="gallery">
        {filteredProducts.map(product => (
          <Card
          key={product.id}
          product={product} 
          onAddToCart={() => addToCart(product)}/>
        ))}
      </div>
    </>


  )
}
export default ProductList;