import React from 'react';
import '../App.css';

const ListItem = (props) => {
    // console.log(props)
    return (
      <div className="listItem" onClick={()=>props.selectOption(props.id)} name={props.name}>
      <h1 name={props.name}>{props.name}</h1>
      </div>
    );
}

export default ListItem;