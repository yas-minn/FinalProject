import React from 'react';
import CartFrame from "/Images/CartFrame.png";
import CartPage from '../Components/CartPage/CartPage';


function Cart() {

    return (

        <>
            <img src={CartFrame} alt="cover" className="cover-photo" />


            <CartPage/>

        </>


    );
};
export default Cart;