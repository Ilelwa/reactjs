import { useState } from "react";
import './Product.css';

const currencyOptions = {
    minimumFractionDigit:2,
    maximumFractionDigit:2,
}
//get total function
function getTotal(total) {
    return total.toLocaleString(undefined,currencyOptions)
    
}

export default function Product(){
    const[cart,setCart] = useState([]);
    const[total,setTotal] = useState(0);

    //add function
    function add(){
        setCart(['ice cream']);
        setTotal(5);
    }
    return(
        <div className="wrapper">
            <div>Shopping cart:{cart.length} items. </div>
            <div>Total price: {getTotal(total)}</div>
            <div className="product">
                <span role='img' aria-label="ice cream">🍦</span> 
            </div>
            <button onClick={add}>Add</button>
            <button onClick={() =>{
                setCart([]);
                setTotal(0);
            }
            }>Remove</button>
        </div>
    )

}