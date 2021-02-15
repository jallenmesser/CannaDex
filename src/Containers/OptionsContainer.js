import React from 'react';
import '../App.css';
import ListItem from '../Componets/ListItem'

const OptionsContainer = (props) => {

  const renderItems = () => {
    if (props.type === 'flavors') {
      return props.flavors.map((flavor, ind) => <ListItem key={ind} name={flavor.name} id={flavor.id} selectOption={props.selectOption}/>)
    } else if (props.type === 'effects') {
      return props.effects.map((effect, ind) => <ListItem key={ind} name={effect.name} id={effect.id} selectOption={props.selectOption} />)
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


