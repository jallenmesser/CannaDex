import React from 'react';
import './App.css';
import Strain from './Strain'
import StrainDetails from './StrainDetails'

const ProductContainer = (props) => {



  const renderStrains = () => {
    if (props.strains && !props.strainDetails) {
      return props.strains.map((strain, ind) => <Strain selectedStrain={props.selectedStrain} key ={ind} name={strain.name}/>)
    } else if (props.strainDetails) {
      return <StrainDetails strainDetails={props.strainDetails}/>
    }
  }


  return (
    <div className="Product">
      <div className='strain'>{renderStrains()}</div>
    </div>
  );
}

export default ProductContainer;

// class ProductContainer extends React.Component {
  
  
//   render() {
//     console.log(this.props.strains)
//     return (
//       <div className="Product">
//       <h1>I am the product container</h1>
//       </div>
//     );
//   }
// }

// export default ProductContainer;