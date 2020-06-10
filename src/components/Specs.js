import React, { Component } from 'react'

export class Specs extends Component {
   render() {
      return (
         <div>
            <label for='valNumber'>Number of Valves</label>
            <select name='valNumber' style={vNumberStyle}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
            </select> 
         </div>
      )
   }
}

const vNumberStyle = {
   
}

export default Specs
