import React, { Component } from 'react'
import Img from '../../assets/Logo.jpg'
import './NavBar.scss'

export class NavBar extends Component {
  render() {
    return (
      <div className="emp-dash-page">
          <header className="emp-dash-header">
            <div className="emp-dash-header-cnt">
                <div className="emp-dash-header-logo">
                    <img src={Img} alt="logo"/>
                </div>
                <div className="emp-dash-header-title">
                    <span className="emp-dash-header-employee">EMPLOYEE</span>
                    <span className="emp-dash-header-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
      </div>
    )
  }
}

export default NavBar