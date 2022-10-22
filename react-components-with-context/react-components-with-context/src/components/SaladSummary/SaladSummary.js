import { createUseStyles } from "react-jss";

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

    return(
        <div className={classes.wrapper}>
            <ul className={classes.list}>
                <li>Mangoes</li>
                <li>Tomatoes</li>
                <li>Cabbage</li>
            </ul>
        </div>
    )
}