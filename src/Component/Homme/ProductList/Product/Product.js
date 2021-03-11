import React from 'react'
import { AddShoppingCart } from '@material-ui/icons';

import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom';

import './Product.css';


import { incrementCount } from '../../../../Action/action';

const Product = ({ product  }) => {
  const dispatch = useDispatch();

      return (
        <div className="card h-100 product">
        <Link to={`/products`} className="product__link"><img
          
            className="card-img-top product__img" src={product.imageUrl} />
          
        </Link>
        <div className="card-body product__text">
            <h4 className="card-title product__title">
                <Link to={`/products`}>{product.name}</Link>
            </h4>
            <h5 className="product__price">{product.price}</h5>
            <p className="card-text product__description">{product.content}</p>
            <button
               onClick={() => dispatch(incrementCount())}
                className="btn btn-info product__add-to-cart">
                <AddShoppingCart />

            </button>
        </div>
    </div>
    )
}

export default Product
