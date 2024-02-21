import React, { Component } from 'react'
import updated from './hoc';
class H2com extends Component {
    constructor(){
        super();
        this.state={
            Count:1
        }
    }
  render() {
    const click = ()=>{
        this.setState({
            Count:this.state.Count+1
        })
    }
    return (
      <div>
        <p>{this.props.name}</p>    
        <button onMouseOver={this.props.increase1}>click</button>
      </div>
    )
  }
}
export default updated(H2com)