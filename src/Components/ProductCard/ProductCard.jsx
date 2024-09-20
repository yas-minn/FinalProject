import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductCard/ProductCard.css';





const Card = ({ product , onAddToCart }) => {



  return (
    <div className="card">
      <Link to={`/ProductDetails/${product.id}/${product.title}`} className='links'>
        <img src={product.image} alt={product.name} className="card-img" />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <p className="card-description">{product.description}</p>
          <p className="card-price">${product.price}</p>
          <div className="button-wrapper">
            <Link to="/Cart">
              <button className="btn" onClick={onAddToCart} >Add to Cart</button>
            </Link>

          </div>
        </div>
      </Link>



    </div>
  );
};

export default Card;
