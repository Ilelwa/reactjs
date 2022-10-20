import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';

export default function AnimalCard({name,size,...props}){
    return(
        <div className='detail'>
            <hi>{name}</hi>
            <Card 
            title = 'Animal'
            details ={ 
                <AnimalDetails
                {...props}/>
            }
            />
            <div>{size}</div>            
        </div>
    )
};

AnimalCard.propTypes = {
    name : PropTypes.string.isRequired,
    size : PropTypes.number.isRequired,
};