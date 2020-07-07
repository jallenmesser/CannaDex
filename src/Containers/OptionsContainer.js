import React from 'react';
import '../App.css';
import ListItem from '../ListItem'

const OptionsContainer = (props) => {

  const renderItems = () => {
    if (props.type === 'flavors') {
      return props.flavors.map((flavor, ind) => <ListItem key={ind} name={flavor} selectOption={props.selectOption}/>)
    } else if (props.type === 'effects') {
      return props.effects.map((effect, ind) => <ListItem key={ind} name={effect.effect} selectOption={props.selectOption} />)
    }
  }

  return (
    <div className="Options">
        <h1>CannaDex</h1>
        <div>
          <button onClick={() => props.changeType('flavors')} >Flavors</button>
          <button onClick={() => props.changeType('effects')} >Effects</button>
        </div>
      <div className='list'>{renderItems()}</div>
      </div>
  );
}

export default OptionsContainer;


