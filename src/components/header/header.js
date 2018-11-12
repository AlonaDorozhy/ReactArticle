import React, { Component } from 'react';
import Menu from './menu'
const menu = [
  {
    link: '/',
    lable: 'Home'
  },
  {
    link: '/',
    lable: 'About'
  },
  {
    link: '/',
    lable: 'Contacts',
  },
  {
    link: '/',
    lable: 'How it works'
  },


]
class Header extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="!">
              Very interesting blog
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <Menu items={menu} />
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
