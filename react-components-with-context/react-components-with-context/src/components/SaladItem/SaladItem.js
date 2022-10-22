import { createUseStyles } from "react-jss";
import PropTypes from 'prop-types';
import { useContext } from "react";
import UserContext from "../User/User";
import { SaladContext } from "../SaladMaker/SaladMaker";
import { useReducer } from "react";

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

// function to assign and increment id in state.
const reducer = key => key + 1;

export default function SaladItem({name,image}){
    //match favorite salad to user in context 
    const user = useContext(UserContext);
    const classes = useStyles();
    const favorite= user.favorites.includes(name);
    //to update id in state
    const [id,updateId] = useReducer(reducer,0);
    //deconstruct the context to get setSalad function
    const {setSalad} = useContext(SaladContext);

    //update state using useReducer hook in both setSalad and updateId 
    function update(){
        setSalad({
            name,
            id:`${name}-${id}` 
        })
        updateId()

    }
    //return name of salad,if its favorite and image of salad
    return(
        <div className={classes.wrapper}>
            <h3>{name}</h3>
            <span className={classes.favorite} aria-label={favorite ? 'Favorite':'Not Favorite'}>
            {favorite ? '😋' : ''}
            </span>
            <button className={classes.add} onClick={update}>
                <span className={classes.img} role='img' aria-label={name}>{image}</span>
            </button>
        </div>
    )
}

SaladItem.propTypes = {
    name:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired
}