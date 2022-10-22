import { useReducer } from "react";
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
  
const currencyOptions = {
    minimumFractionDigits:2,
    maximumFractionDigits:2,
}
//get total function
function getTotal(cart) {
    const total = cart.reduce((totalCost,item) => totalCost + item.price,0);
    return total.toLocaleString(undefined,currencyOptions)
    
}
//this reducer function checks current state if add or remove of name then appends the product end of the array
function cartReducer(state,action){
    switch (action.type) {
        case 'add':
            return [...state,action.product];
        case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            //check if item is in state by findIndex 
            if (productIndex < 0){

                return state;
            } 

            const update = [...state];  
            update.splice(productIndex,1)  
            return update
        default:
            return state;

    }
}

export default function Product(){
    //current state
    const[cart,setCart] = useReducer(cartReducer,[]);

    //add function
    function add(product){
        setCart({product,type :'add'});

    }

    //remove function 
    function remove(product){
        setCart({product,type:'remove'});
    }
    return(
        <div className="wrapper">
            <div>Shopping cart:{cart.length} items. </div>
            <div>Total price: {getTotal(cart)}</div>
            <div>
                {products.map(product =>(
                    <div key={product.name}>
                        <div className="product">
                            <span role='img' aria-label={product.name}>{product.emoji}</span> 
                        </div>
                        <button onClick={() => add(product)}>Add</button>
                        <button onClick={() => remove(product)}>Remove</button>    
                    </div>
                ))}
            </div>    
            
        </div>
    )

}