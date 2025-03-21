import React from 'react';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import  EmployeePayrollHomePage from '../components/EmployeePayrollHomepage/EmployeePayrollHomepage';
import DashboardContainer from '../Pages/DashboardContainer';
import Registration from '../Pages/Registration/Registration'

export default function RoutingModule() {

    const route = createBrowserRouter([
        {
            path:'homePage',
            element: (
                <EmployeePayrollHomePage/>
            ),
            children:[
                {
                    path:'dashboard',
                    element:<DashboardContainer />
                },
                {
                    path:'register',
                    element:<Registration />
                },
            ]
        }
    ]);
  return (
        <RouterProvider router={route} />
  )
}