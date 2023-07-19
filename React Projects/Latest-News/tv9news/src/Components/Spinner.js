import React, { Component } from 'react';
import loading from '../Components/Spinner.gif';
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{'padding' : '23% 0px'}}>
        <img src={loading} alt="loading" style={{width : '7%'}} />
      </div>
    )
  }
}

export default Spinner
