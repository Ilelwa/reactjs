import { render } from '@testing-library/react';
import React,{Component, component} from 'react';
import './Product.css';
const products = [
    {
      emoji: '🍦',
      name: 'ice cream',
      price: 5
    },
    {
      emoji: '🍩',
      name: 'donuts',
      price: 2.5,
    },
    {
      emoji: '🍉',
      name: 'watermelon',
      price: 4
    }
  ];
  
export default class Product extends Component {
    state = {
        cart : [],
    }
    //2dp on currency
    currencyPoint = {
        minimumFractionDigit:2,
        maximumFractionDigit:2,
    }
    //add to item to cart calculate total price
    add = (product) =>{
        this.setState(state =>({
            cart:[...state.cart,product],
        }))
    }
    //remove from cart
    remove = (product) =>{
        this.setState(state =>{
            const cart = [...state.cart];
            const productIndex = cart.findIndex(p => p.name === product.name)
            if (productIndex <0){
                return;
            } 
            cart.splice(productIndex,1)
            return({
                cart,
                }
            )
        })
    }
    getTotal = () =>{
        const total = this.state.cart.reduce((totalCost,item) =>totalCost + item.price,0)
        return total.toLocaleString(undefined,this.currencyPoint)
    }

    render() {
        return(
            <div className='wrapper'>
                <div>Cart has: {this.state.cart.length} items</div>
                <div>Total: {this.getTotal()}</div>
                <div>
                    {products.map(product =>(
                        <div key={product.name}>
                            <div className='product'>
                                <span role='img' aria-label={product.name}>{product.emoji}</span>
                            </div>
                            <button onClick={() => this.add(product)}>Add</button>
                            <button onClick={() => this.remove(product)}>Remove</button>
                        </div>
                    ))}
                    
                </div>
                
            </div>
        )
    }



}