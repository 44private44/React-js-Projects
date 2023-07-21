import React, { Component } from 'react';
import loading from '../Components/Spinner.gif';
export class Spinner2 extends Component {
  render() {
    return (
      <div className='text-center' style={{'margin' : '0px 0px 10px 0px'}}>
        <img src={loading} alt="loading" style={{width : '4%'}} />
      </div>
    )
  }
}

export default Spinner2
