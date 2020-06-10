import React, { Component } from 'react'

export class Valve extends Component {
   render() {
      return (
         <div style={inputStyle}>
            <input type="text" placeholder="Current Gap" /> <br/>
            <input type="text" placeholder="Shim Thickness" />
         </div>
      )
   }
}

const inputStyle = {
   
}

export default Valve
