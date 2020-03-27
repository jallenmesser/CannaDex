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
  const [strain, setStrain] = useState('')
  const [strainDetails, setStrainDetails] = useState()

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
    setStrainDetails('')
  }

  const changeType = (name) => {
    setType(name)
  }

  const selectedStrain = (name) => {
    console.log(name)
    setStrain(name)
    requests.fetchSelectedStrainDetails(name)
    .then(details => setStrainDetails(details.find(detail => detail.name === name)))
  }


  return (
    <div>
      <div className="Columns">
        <OptionsContainer flavors={flavors} effects={effects} selectOption={selectOption} changeType={changeType} type={type}/>
        <ProductContainer strains={strains} selectedStrain={selectedStrain} strainDetails={strainDetails}/>
      </div>
    </div>
  );
}

export default MainContainer;

