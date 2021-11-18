import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    // declare states
    const [datas, setData] = useState([]);
    const [cart, setCart] = useState([]);

    // load the data
    useEffect(() =>{
        fetch("https://sajjadbhuiyan.github.io/class_room_customization/product.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    
    // declare event handler
    const handleAddToCart = (data) => {
        const newCart = [...cart, data];
        setCart(newCart);
    }
    return (
        <div className="container">
            <Cart cart={cart}></Cart>
        <div className="re-container">
            {
                datas.map(data => <Product
                key={data.id}
                data={data}
                handleAddToCart={handleAddToCart}
                >

                </Product>)
            }
        </div>
        </div>
    );
};

export default Products;