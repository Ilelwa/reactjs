import React, {Component} from "react";
import './Instructions.css';
import emoji from './emoji.svg';
/**
 * This is classed-based component .uses methods and properties to store states and tend to be longer
export default class Instructions extends Component{
    render() {
        return(
            <div className="instructions">
               <p>New React Component emoji.</p>
               <img alt="cry laugh" src = {emoji}/>

            </div>
        ) 
    }
};*/

//function component it uses hooks to store states and changes hence abit shorter
export default function Instructions() {
    return (
        <div className="instructions">
            <img alt="cry laugh" src={emoji}/>
            <p>function-based component.it uses hooks</p>
        </div>
    )
}