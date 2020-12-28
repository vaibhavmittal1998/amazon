import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header() {
    return (
        <div className = "header">
            <img src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo"></img>

            <div className = "header__searchBar">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className = "header__searchIcon"/>
            </div>

            <div className="header_navbar">
                <div className = "header_option">
                    <span className = "header_option_key"> Hello Guest </span>
                    <span className = "header_option_value"> Sign In </span>
                </div>

                <div className = "header_option">
                    <span className = "header_option_key"> Return </span>
                    <span className = "header_option_value"> & Order </span>
                </div>

                <div className = "header_option">
                    <span className = "header_option_key"> Your </span>
                    <span className = "header_option_value"> Prime </span>
                </div>

                <div className = "header_option_basket">
                    <ShoppingCartOutlinedIcon/> 
                    <span className = "header_option_basket_value"> 0 </span>
                </div>
            </div>
            
        </div>

    )
}

export default Header
