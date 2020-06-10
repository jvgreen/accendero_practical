import React, { Component } from 'react'

export class Specs extends Component {
   render() {
      return (
         <div style={specsStyle}>
            <label>Number of Valves</label> <br/>
            <select name='valNumber' id={this.props.id} onChange={this.props.valNumChanged}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
            </select> <br/>
            <label>Specified Tolorance</label> <br/>
            <input type="text" onChange={this.props.tolChanged} />
         </div>
      )
   }
}

const specsStyle = {
   
}

export default Specs
