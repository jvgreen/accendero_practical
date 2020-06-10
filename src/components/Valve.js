import React, { Component } from 'react'

export class Valve extends Component {
   render() {
      const {id} = this.props.valve;
      return (
         <div style={inputStyle}>
            <label>{id}</label> <br/>
            <input type="text" placeholder="Current Gap" name={id} onChange={this.props.gapChanged}/> <br/>
            <input type="text" placeholder="Shim Thickness"  name={id} onChange={this.props.thicknessChanged}/>
         </div>
      )
   }
}

const inputStyle = {
   
}

export default Valve
