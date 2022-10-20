import Alert from '../Alert/Alert';
import './CartError.css';

export default function CartError(){
    return(
        <Alert title = 'Item not found' type='error'>
            <div className='error-wrapper'>
                <h2>Item out of stock</h2>
            </div>
        </Alert>
    )
}