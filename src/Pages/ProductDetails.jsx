import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useStore from '../store/project';
import Review from "/Images/stars.png";
import Line from "/Images/Line.png";
import Size from "/Images/size.png";


import "../Pages/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); 
  
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = useStore((state) => state.addToCart);
  
  
  const { count, plus, minus } = useStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); 

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div id='Dtls'>
      <div className='ImageContainer'>
        <img src={product.image} alt={product.title} className='PP' />
      </div>
      <div className='ProductInfo'>
        <h1>{product.title}</h1> 
        <h3>${product.price}</h3>

        <div className='ReviewDiv'>
          <img src={Review} alt="Review stars" />
          <img src={Line} alt="Separator line" />
          <label>5 Customer Reviews</label> 
        </div>

        <p>{product.description}</p>

        <img src={Size} alt="Size information" />

        <div className='Counter'>
          <div className="CounterWrapper">
            <button onClick={plus}>+</button>
            <span>{count}</span>
            <button onClick={minus}>-</button>
          </div>

          <Link to="/Cart">
            <button className="btn2" onClick={() => addToCart(product)}>Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
