import './Alert.css';
import PropTypes from 'prop-types';

export default function Alert({type,title,children}) {
    // call the right borders/style as per type
    return(
        <div className={`alert-wrapper ${type}`}> 
            <h2>{title}</h2>
            {children}
        </div>
    )
}  

Alert.propTypes = {
    type : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired]), 

}
