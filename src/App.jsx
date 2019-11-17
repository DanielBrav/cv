import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  refToAbout: null,
                  refToEducation: null,
                  refToExperience: null,
                  refToContact: null,
                  scrollLocation: null,
                  navFunction: null
                 }
  }

  setRefs(about, edu, exp, contact) {
    this.setState({ refToAbout: about, refToEducation: edu, refToExperience: exp, refToContact: contact });
  }

  setNavFunction(nav) {
    this.setState({ navFunction: nav });
  }

  render() {
    return (
      <div className="App">
        <div className="organize">
          <div className="contentDiv">
            <Header 
              refToAbout={this.state.refToAbout}
              refToEducation={this.state.refToEducation}
              refToExperience={this.state.refToExperience}
              refToContact={this.state.refToContact}
              setNavFunction={this.setNavFunction.bind(this)}
            />
            <Content 
              setRefs={this.setRefs.bind(this)}
              setNavFunction={this.state.navFunction}
            />
          </div>
        </div>
      </div>
    );
  }
}
