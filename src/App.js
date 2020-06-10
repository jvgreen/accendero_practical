import React, { Component } from 'react';
import './App.css';
import ValveList from './components/ValveList';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import SpectList from './components/SpecList';
class  App extends Component {
  state = {
    specs: [
      {
        id: 'exhaustSpec',
        numValve: 0,
        tolorance: 0
      },
      {
        id: 'intakeSpec',
        numValve: 0,
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
          <ValveList />
          <SubHeader label='Intake'/>
          <SpectList id='intakeSpec' valNumChanged={this.valNumChanged}/> <br/>
          <ValveList />
      </div>
    );
  }
}

export default App;
