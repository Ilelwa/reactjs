import PropTypes from 'prop-types';
import './AnimalDetails.css';

function convertFood(food) {
    switch(food) {
        case 'meat':
            return '🍖';
        
        case 'insect':
            return '🐜';
        
        case 'grass':
            default:
                return '🌱'    

    }
};

export default function AnimalDetails({diet,scientificName}) {
    return(
        <div className='detail'>
            <h3>Details</h3>
            <div>Scientific Name:{scientificName}</div>
            <div>
                Diet:{diet.map(food => convertFood(food)).join('  ')}
            </div>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet:PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName:PropTypes.string.isRequired
}