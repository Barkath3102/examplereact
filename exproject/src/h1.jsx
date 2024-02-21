import React, { Component } from 'react'
import updated from './hoc'; 
class H1com extends Component {
    constructor(){
        super();
        // this.state={
        //     Count:1
        // }
    }
  render() {
    // const hover = ()=>{
    //     this.setState({
    //         Count:this.state.Count+1
    //     })
    // }
    return (
      <div>
        <p>{this.props.name}</p>    
        <button onClick={this.props.increase}>click</button>
        
      </div>
    )
  }
}
export default updated(H1com)