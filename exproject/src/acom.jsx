import React, { Component } from 'react'
import Bcom from './bcom';
import { ProvideContextValue } from './contextmetth';  
export default class Acom extends Component {
    constructor(){
        super();
    }
    render() {
                
    return (

      <div>
        <ProvideContextValue value={{name:'barkath'}}>
        <Bcom></Bcom>
        </ProvideContextValue>
        
      </div>
    )
  }
}
