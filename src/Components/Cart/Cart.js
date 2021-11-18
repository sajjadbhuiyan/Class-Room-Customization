import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // calculate total quantity
    let totalQuantity = cart.length;
    // calculate gros salary
    let total = cart.reduce((previous, current) => previous+current.price,0);
    return (
        <div className="cart-container">
            <h4><i class="fas fa-user-alt"></i> Total Products for Customizang Class</h4>
            <h5>Total selected Product : {totalQuantity}</h5>
            <p>Total Price : {total}</p>
            {
                cart.map(c => <h5 ><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> {c.productTitle}</h5>) 
            }
        </div>
    );
};

export default Cart;