import React, { useState,useEffect } from 'react';
import { getRiverInformation } from '../../services/rivers';
import PropType from 'prop-types';

export default function RiverInformation({name}){
    const[riverInformation,setRiverInformation] = useState();

    useEffect(() =>{
        let mounted = true;
        getRiverInformation(name)
        .then(data =>{
            if(mounted){
            setRiverInformation(data)
            }
        });
        return() => {
            mounted=false;
        }
    },[name])
    return (
        <div>
           <p>River Information</p> 
           <ul>
            <li>Continent:{riverInformation?.continent}</li>
            <li>Length:{riverInformation?.length}</li>
            <li>outflow:{riverInformation?.outflow}</li>
           </ul>
        </div>
    )
}

RiverInformation.propType = {
    name: PropType.string.isRequired
}