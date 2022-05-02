import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark  mb-4" style={{backgroundColor:'#2e57a1'}}  >
        <div className="container" >
            <a className="navbar-brand" href="Dashboard.html">
                Todo lists
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
 
    )
  }
}

export default Header;
