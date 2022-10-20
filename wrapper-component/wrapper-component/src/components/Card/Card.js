import './Card.css';
import PropTypes from 'prop-types';

export default function Card({children,details,title}){
    return(
        <div className='card'>
            <div className = 'card-detail'>
                <h2>{title}</h2>
                {details}
            </div>
            <div>
                {children}
                </div>
            

        </div>
        
    )
}
Card.propTypes = {
    details : PropTypes.string.isRequired,
    title   : PropTypes.string.isRequired,
    children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.element),PropTypes.element.isRequired]) 
};

Card.defaultProps = {
    details : null
}