import React, { Component } from 'react';
import './App.css';
import ValveList from './components/ValveList';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import SpectList from './components/SpecList';
class  App extends Component {
  state = {
    // With more time I would make the valves be created
    // Dynamically and not hard Coded
    exValves: [
      {
        id: "Exhaust 1",
        currentGap: 0,
        ShimThickness: 0
      },
      {
        id: "Exhaust 2",
        currentGap: 0,
        ShimThickness: 0
      },
      {
        id: "Exhaust 3",
        currentGap: 0,
        ShimThickness: 0
      },
      {
        id: "Exhaust 4",
        currentGap: 0,
        ShimThickness: 0
      }
    ],
    inValves: [
      {
        id: "Intake 1",
        currentGap: 0,
        ShimThickness: 0
      },
      {
        id: "Intake 2",
        currentGap: 0,
        ShimThickness: 0
      },
      {
        id: "Intake 3",
        currentGap: 0,
        ShimThickness: 0
      },
      {
        id: "Intake 4",
        currentGap: 0,
        ShimThickness: 0
      }
    ],
    specs: [
      {
        id: 'exhaustSpec',
        numValve: 1,
        tolorance: 0
      },
      {
        id: 'intakeSpec',
        numValve: 1,
        tolorance: 0
      }
    ]
  }

  // Valve Number Changed
  valNumChanged = (e) => {
    this.setState({ specs: this.state.specs.map(specs =>{
      if(specs.id === e.target.id) {
        specs.numValve = e.target.value
      }
      return specs;
    })})
  }
  
  // Specified Tolorance changed
  tolChanged = (e) => {
    this.setState({ specs: this.state.specs.map(specs =>{
      if(specs.id === e.target.id) {
        specs.tolorance = e.target.value
      }
      return specs;
    })})
  }

  // Shim Gap Changed
  gapChanged = (e) => {
    if(e.target.name.includes("Ex")){
      this.setState({exValves: this.state.exValves.map(exValves =>{
        if(exValves.id == e.target.name) {
          exValves.currentGap = e.target.value
        }
        return exValves;
      })})
    }
    if(e.target.name.includes("In"))
    {
      this.setState({inValves: this.state.inValves.map(inValves =>{
        if(inValves.id == e.target.name) {
          inValves.currentGap = e.target.value
        }
        return inValves;
      })})
    }
  }

  // Shim Thickness changed
  thicknessChanged = (e) => {
    if(e.target.name.includes("Ex")){
      this.setState({exValves: this.state.exValves.map(exValves =>{
        if(exValves.id == e.target.name) {
          exValves.ShimThickness = e.target.value
        }
        return exValves;
      })})
    }
    if(e.target.name.includes("In"))
    {
      this.setState({inValves: this.state.inValves.map(inValves =>{
        if(inValves.id == e.target.name) {
          inValves.ShimThickness = e.target.value
        }
        return inValves;
      })})
    }
  }

  render() {
    return (
      <div className="App">
          <Header />
          <SubHeader label='Exhaust'/>
          <SpectList 
            id='exhaustSpec' 
            tolChanged={this.tolChanged} 
            valNumChanged={this.valNumChanged}
          /> <br/>
          <ValveList 
            valves={this.state.exValves}  
            thicknessChanged={this.thicknessChanged}
            gapChanged={this.gapChanged} 
          />
          <SubHeader label='Intake'/>
          <SpectList 
            id='intakeSpec'
            tolChanged={this.tolChanged} 
            valNumChanged={this.valNumChanged}
          /> <br/>
          <ValveList 
            valves={this.state.inValves} 
            thicknessChanged={this.thicknessChanged}
            gapChanged={this.gapChanged}  
          /> <br/>
          <button>Calculate New Shims</button>
      </div>
    );
  }
}

export default App;
