import React, { useState,useEffect } from 'react';
import { getRiverInformation } from '../../services/rivers';

export default function RiverInformation({name}){
    const[riverInformation,setRiverInformation] = useState();

    useEffect(() =>{
        getRiverInformation(name)
        .then(data =>
            setRiverInformation(data)
            );
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