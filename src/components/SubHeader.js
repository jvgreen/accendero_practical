import React, { Component } from 'react'

export class SubHeader extends Component {
   render() {
      return (
         <div>
            <h3>{this.props.label}</h3>
         </div>
      )
   }
}

export default SubHeader
