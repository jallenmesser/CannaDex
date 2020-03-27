import React from 'react';
import './App.css';

const StrainDetails = (props) => {
    // console.log(props)
    return (
      <div >
        <h1 name={props.strainDetails.name}>{props.strainDetails.name}</h1>
        <h3>Race: {props.strainDetails.race}</h3>
        <p>Description: {props.strainDetails.desc}</p>
      </div>
    );
}

export default StrainDetails;