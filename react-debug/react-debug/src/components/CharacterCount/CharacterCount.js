import { useContext } from "react";
import { TextContext } from "../App/App";
import PropTypes from 'prop-types';

export default function CharacterCount({show}) {
    const text = useContext(TextContext);

    if(!show){
        return null;
    }
    return(
        <div>
            character count : {text.length}
        </div>
    )
}
CharacterCount.prototype = {
    show :PropTypes.bool.isRequired
}