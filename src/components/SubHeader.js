import React, { Component } from 'react'

export class SubHeader extends Component {
   render() {
      return (
         <div>
            <h3 style={subHeadStyle}>{this.props.label}</h3>
         </div>
      )
   }
}

const subHeadStyle = {
   background: 'black',
   color: '#7bf542'
}

export default SubHeader
