import { render } from '@testing-library/react';
import React,{Component, component} from 'react';
import './Product.css';

export default class Product extends Component {
    state = {
        cart : [],
        total:0 
    }
    //2dp on currency
    currencyPoint = {
        minimumFractionDigit:2,
        maximumFractionDigit:2,
    }
    //add to cart
    add = () =>{
        this.setState({
            cart:['ice cream'],
            total:5
        })
    }
    //remove from cart
    remove = () =>{
        this.setState({
            cart:[],
            total:0
        })
    }
    getTotal = () =>{
        return this.state.total.toLocaleString(undefined,this.currencyPoint)
    }

    render() {
        return(
            <div className='wrapper'>
                <div>Cart has: {this.state.cart.length} items</div>
                <div>Total: {this.getTotal()}</div>
                <div className='product'><span role='img' aria-label='ice cream'>🍦</span> </div>
                <button onClick={this.add}>Add</button>
                <button onClick={this.remove}>Remove</button>
            </div>
        )
    }



}