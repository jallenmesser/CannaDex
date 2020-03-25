import React, {useState, useEffect} from 'react'
import './App.css';
import OptionsContainer from './OptionsContainer'
import ProductContainer from './ProductContainer'
import * as requests from './requests'

const MainContainer = () => {
  
  const [effects, setEffects] = useState([])
  const [flavors, setFlavors] = useState([])
  const [selectedOption, setSelectedOption] = useState('')
  const [type, setType] = useState('')
  const [strains, setStrains] = useState([])

  useEffect(() => {
    requests.fetchEffects()
      .then(effects => setEffects(effects));

    requests.fetchFlavors()
      .then(flavors => setFlavors(flavors));
  }, [])

  useEffect(() => {
    if (type === 'flavors') {
      requests.fetchSelectedFlavor(selectedOption)
      .then(strains => setStrains(strains));
    } else if (type === 'effects') {
      requests.fetchSelectedEffect(selectedOption)
      .then(strains => setStrains(strains))
    }
  }, [selectedOption])

  const selectOption = (name) => {
    setSelectedOption(name)
  }

  const changeType = (name) => {
    setType(name)
  }

  return (
    <div>
      <div className="Columns">
        <OptionsContainer flavors={flavors} effects={effects} selectOption={selectOption} changeType={changeType} type={type}/>
        <ProductContainer strains={strains}/>
      </div>
    </div>
  );
}

export default MainContainer;

