import React, { Component } from "react";
import Img from "../../assets/Logo.jpg";
import "./NavBar.scss";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div>
            <img src={Img} alt="Company Logo" />
          </div>
          <div className="navbar-employee-payroll">
            <div>EMPLOYEE</div>
            <div className="navbar-brPayroll">PAYROLL</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
