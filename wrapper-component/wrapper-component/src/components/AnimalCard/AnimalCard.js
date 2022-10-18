import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';

export default function AnimalCard({name,size,...props}){
    return(
        <div className='detail'>
            <hi>{name}</hi>
            <div>{size}</div>
            <AnimalDetails
            {...props}/>
        </div>
    )
};

AnimalCard.propTypes = {
    name : PropTypes.string.isRequired,
    size : PropTypes.number.isRequired,
};