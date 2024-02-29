import React, { Component } from 'react'

const updated = (NewComp)=>{
class hoc extends Component {
    constructor(){
        super();
        this.state={
            Count:1
        }
    }
    render() {
        const increase=()=>{
            this.setState(pre=>({
                  Count:this.state.Count+5
                
            }))
        }
        const increase1=()=>{
          this.setState({
            Count:this.state.Count+1
          })
        }
    return (
      <div>
        <NewComp name={this.state.Count} increase={increase} increase1={increase1}></NewComp>
      </div>
    )
  }
}
return hoc
}
export default updated
