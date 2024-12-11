import React from 'react';
// import mobileimage from './mobileImg.jpg';
import './Home.css'
function Header(props) {
    console.log("Header "+props.data)
    return (
        <div>
            <div className='add-to-cart' >
            <span className='cart-count'>{props.data.length}</span>

                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="cart img"></img>
            </div>
           
        </div>
    );
}

export default Header;