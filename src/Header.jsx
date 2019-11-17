import React from 'react';
import styles from './Header.scss';
import logo from './logo.jpg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactPressed: false,
      nav: 0
    };
    this.props.setNavFunction(this.setNav.bind(this));
  }

  setNav(nav) {
    this.setState({ nav: nav });
    console.log('11', nav);
  }

  render() {
    return (
      ""
    )
  }
}
