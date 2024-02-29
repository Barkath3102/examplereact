import React, { Component } from 'react'
import Ccom from './ccom';
export default class Bcom extends Component {
    constructor(){
        super();
        
    }
    render() {
        
        
    return (
      <div>
        <Ccom name1={this.props.name}></Ccom>
      </div>
    )
  }
}
