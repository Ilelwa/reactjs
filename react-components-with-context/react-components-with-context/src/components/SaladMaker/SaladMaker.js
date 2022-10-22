import { createUseStyles } from "react-jss";
import SaladBuilder from "../SaladBuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";
import { createContext,useReducer } from "react";

const useStyles = createUseStyles({
    wrapper:{
        textAlign:'center',
    }
})
export const SaladContext = createContext();

//append item to array in state
function reducer(state,item){
    return [...state,item]
}

export default function SaladMaker(){
    const classes = useStyles();
    const[salad,setSalad] = useReducer(reducer,[]);
    return(
        //the context up the tree making data accessible over SaladBuilder and SaladSummary components
        <SaladContext.Provider value={{salad,setSalad}}>
            <h1 className={classes.wrapper}>
                <span role='img' aria-label="salad">🥗</span>
                Build your custom salad.
                <span role='img' aria-label="salad">🥗</span>
            </h1>
            <SaladBuilder />
            <SaladSummary />
        </SaladContext.Provider>
        
    )
}