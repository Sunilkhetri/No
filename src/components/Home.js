import React from 'react';
import mobileimage from './mobileImg.jpg';
import './Home.css'
function Home(props) {
    console.log("Home ",props.data)
    return (
        <div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={mobileimage} alt='Phoneimage here'></img>
                </div>
                <div className='text-wrapper item'>
                    <span>I-Phone</span>
                    <span>Price- 100000/-</span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={()=>{props.addToCartHandler({price:100000,name:'I-Phone 11'})}}>Add to Cart</button>
                    <button className='remove-cart-btn' style={{backgroundColor:'rebeccapurple'}} onClick={()=>{props.removeToCartHandler()}}>Remove to Cart</button>
                
                </div>
            </div>
        </div>
          );
}

export default Home;