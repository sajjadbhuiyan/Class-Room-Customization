import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './Product.css';

const Product = (props) => {
    const {productTitle, color, quality, designer, price, image} = props.data;
    return (
        <div className="product-container">
            <div className="product-img">
                <Image fluid src={image} alt={productTitle} />
            </div>
            <div className="product-content">
                <h3>Product Name : {productTitle}</h3>
                <h4>Color : {color}</h4>
                <h5>Quality : {quality}</h5>
                <h5>Designer :{designer}</h5>
                <h5>Price :{price}</h5>
            <button
              onClick={() => props.handleAddToCart(props.data)} className="btn">
                <Button> <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Add to cart</Button>
            </button>
            </div>
        </div>
    );
};

export default Product;