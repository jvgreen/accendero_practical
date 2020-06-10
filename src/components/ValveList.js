import React, { Component } from 'react'
import Valve from './Valve'

export class ValveList extends Component {
   render() {
      return  this.props.valves.map((valve) => (
         <Valve
            key={valve.id}
            valve={valve}
            thicknessChanged={this.props.thicknessChanged}
            gapChanged={this.props.gapChanged} 
         />
      ));
   }
}

export default ValveList
