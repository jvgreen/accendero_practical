import React, { Component } from 'react'

export class Valve extends Component {
   render() {
      const {id, newThickness} = this.props.valve;
      return (
         <div style={inputStyle}>
            <label>{id}</label> <br/>
            <input type="text" placeholder="Current Gap" name={id} onChange={this.props.gapChanged}/> <br/>
            <input type="text" placeholder="Shim Thickness"  name={id} onChange={this.props.thicknessChanged}/> <br/><br/>
            
            <label>New Shim Thickness</label> <br/>
            <input type="text" disabled value={newThickness}/> <br/>  
         </div>
      )
   }
}

const inputStyle = {
   
}

export default Valve
