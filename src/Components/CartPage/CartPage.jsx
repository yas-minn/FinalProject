import React from 'react';
import useStore from '../../store/project';
import Delete from '/Images/delete-filled.png'
import '../CartPage/CartPage.css'


const CartPage = () => {
    const cartItems = useStore(state => state.cart);
    const totalPrice = useStore(state => state.totalPrice);
    const removeFromCart = useStore(state => state.removeFromCart);
    const clearCart = useStore(state => state.clearCart);



    return (

        <div className="cart">

            {cartItems.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                <div className='MainBox'>
                    <div className='ProductsAdded'>
                        <ul className='FirstRow'>
                            <li>
                                Product
                            </li>
                            <li>
                                Price
                            </li>
                        </ul>
                        <ul className='SecondRow'>
                            {cartItems.map((item) => (
                                <>
                                    <li key={item.id} className='ItemD'>
                                       
                                        <img src={item.image} />
                                       
                                        
                                        {item.title}
                                    </li>
                                    <li className='ItemD'>
                                        ${item.price.toFixed(2)}
                                    </li>
                                    <li>
                                        <button onClick={() => removeFromCart(item.id)}><img src={Delete}/></button>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>

                    <div className='TotalPriceBox'>
                        <h1>Cart Total</h1>
                        <h3> ${totalPrice.toFixed(2)}</h3>
                        <button onClick={clearCart}>Check Out</button>

                    </div>

                </div>
            )}
        </div>


    );
};

export default CartPage;
