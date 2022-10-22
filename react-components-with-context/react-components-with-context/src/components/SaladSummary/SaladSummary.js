import { createUseStyles } from "react-jss";
import { useContext } from "react";
import { SaladContext } from "../SaladMaker/SaladMaker";

const useStyles = createUseStyles({
    wrapper:{
        borderTop:'brown solid 1px',
        display:'flex',
        padding:25
    },
    list :{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        maxHeight:50,
        ' & li':{
            width:100,
        }
    }
})

export default function SaladSummary() {
    const classes = useStyles();
    const {salad} = useContext(SaladContext);
    //return a list from state selected by user as favorite salad
    return(
        <div className={classes.wrapper}>
            <ul className={classes.list}>
               {salad.map(({name,id}) => (<li key = {id}>{name}</li>))}
            </ul>
        </div>
    )
}