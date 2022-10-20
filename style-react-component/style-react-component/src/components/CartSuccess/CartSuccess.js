import PropTypes from 'prop-types';
import Alert from '../Alert/Alert';
import './CartSuccess.css';

export default function CartSuccess() {
    return(
        <Alert title='Item found' type='success'>
            <div className='success-wrap'>
                <h2>Added to cart</h2>
                <div className='item'>
                    <div>mangoes</div>
                    <div>Quantity: 3</div>
                   
                </div>
                <div className='item'>
                <div>Oranges</div>
                <div>Quantity: 1</div>

                </div>
            </div>
        </Alert>
    )
}