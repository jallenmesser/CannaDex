import React from 'react';
import './App.css';

const Strain = (props) => {
    // console.log(props)
    return (
      <div className="strain" >
        <h1 name={props.name}>{props.name}</h1>
      </div>
    );
}

export default Strain;