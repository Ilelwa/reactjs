import { createUseStyles } from "react-jss";
import PropTypes from 'prop-types';

//jss styling
const useStyles = createUseStyles({
    wrapper:{
        border:'maroon solid 1px', //light grey
        margin:20,
        padding:25,
        textAlign:'center',
        textTransform:'capitalize',
        width:200,
        position:'relative',
    },
    add: {
        background:'none',
        border:'none',
        cursor:'pointer',
    },
    favorite:{
        fontSize:20,
        position:'absolute',
        top:10,
        right:10,
    },
    img:{
        fontSize:80,
    },


})

export default function SaladItem({name,image}){
    const classes = useStyles();
    const favorite= true;
//return name of salad,if its favorite and image of salad
    return(
        <div className={classes.wrapper}>
            <h3>{name}</h3>
            <span className={classes.favorite} aria-label={favorite ? 'Favorite':'Not Favorite'}>
            {favorite ? '😋' : ''}
            </span>
            <button className={classes.add}>
                <span className={classes.img} role='img' aria-label={name}>{image}</span>
            </button>
        </div>
    )
}

SaladItem.propTypes = {
    name:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired
}