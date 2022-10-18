import PropTypes from 'prop-types';

export default function AnimalCard({name,size,diet}){
    return(
        <div className='detail'>
            <hi>{name}</hi>
            <div>{size}</div>
            <div>{diet.join(', ')}</div>
        </div>
    )
};

AnimalCard.propTypes = {
    name : PropTypes.string.isRequired,
    size : PropTypes.number.isRequired,
    diet : PropTypes.arrayOf(PropTypes.string).isRequired,
};