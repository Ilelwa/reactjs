import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    wrapper:{
        borderBottom:'grey solid 1px',
        padding:[5,10],
        textAlign:'right',
    }
});

export default function Navigation() {
    const classes = useStyles();

    return(
        <div className={classes.wrapper}>
            Welcome Kwame.
        </div>
    )


}