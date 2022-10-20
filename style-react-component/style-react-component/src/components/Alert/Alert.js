import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
//type colors
const colors = {
    success: '#6da06f',
    error: '#f56260'
};
//create jss styles it will take the color based on type 
const styles = createUseStyles({
    wrapper :{
        padding:15,
        marginBottom:15,
        border :({type}) => `${colors[type]} solid 1px`, 
        '& > h2':{
            color:({type}) => colors[type],
            margin :[0,0,10,0],
        }
    }

})
export default function Alert({type,title,children}) {
    // call the right borders/style as per type
    const styling = styles({type})

    return(
        <div className={styling.wrapper}> 
            <h2>{title}</h2>
            {children}
        </div>
    )
}  

Alert.propTypes = {
    type : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired]), 

}
