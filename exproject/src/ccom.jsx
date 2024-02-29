import React, { Component } from 'react'
import { ConsumerContextValue } from './contextmetth';

export default class Ccom extends Component {
    constructor(){
        super();
        this.state={
          name:"hello world"
        }
    }
    render() {
        
        
    return (
      <div>
        <p>{this.state.name}</p> 
        <h1>hello</h1>
        <ConsumerContextValue>
          { value => <h1>{value.name}</h1>}
        </ConsumerContextValue>   
      </div>
    )
  }
}
