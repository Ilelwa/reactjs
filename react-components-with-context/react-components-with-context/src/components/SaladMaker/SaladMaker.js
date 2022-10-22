import { createUseStyles } from "react-jss";
import SaladBuilder from "../SaladBuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";

const useStyles = createUseStyles({
    wrapper:{
        textAlign:'center',
    }
})

export default function SaladMaker(){
    const classes = useStyles()

    return(
        <>
        <h1 className={classes.wrapper}>
            <span role='img' aria-label="salad">🥗</span>
            Build your custom salad.
            <span role='img' aria-label="salad">🥗</span>
        </h1>
        <SaladBuilder />
        <SaladSummary />
        </>
    )
}