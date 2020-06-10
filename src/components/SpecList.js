import React, { Component } from 'react'
import Specs from './Specs'

export class SpecList extends Component {
   render() {
      return (
         <div>
            <Specs 
               id={this.props.id} 
               valNumChanged={this.props.valNumChanged}
               tolChanged={this.props.tolChanged}
            />
         </div>
      )
   }
}

export default SpecList
