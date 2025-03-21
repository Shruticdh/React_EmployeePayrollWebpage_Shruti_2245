import React, { Component } from 'react'
import {Outlet}  from "react-router-dom";
import NavBar from '../NavBar/NavBar'

export class EmployeePayrollHomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    )
  }
}

export default EmployeePayrollHomePage;