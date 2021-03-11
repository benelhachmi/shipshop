import React from 'react';
import {NavLink} from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import {  Badge } from '@material-ui/core';
import { useSelector } from 'react-redux'

const Header = () => {
  
        const { count } = useSelector(state => state)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">ShipShop</NavLink>
                <div>
                    
                     <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}>
                                <i className="fa fa-shopping-cart mr-2"  aria-hidden="true" />
                                <Badge badgeContent={count} color="secondary">
             
             <ShoppingCart />
             </Badge> </NavLink>
                        </li>
                    </ul>      
                </div>
            </div>
        </nav>
    );
};
export default Header;
