import React from 'react';
import './App.css';
import Strain from './Strain'

const ProductContainer = (props) => {
  const renderStrains = () => {
    if (props.strains) {
      return props.strains.map((strain, ind) => <Strain key ={ind} name={strain.name}/>)
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