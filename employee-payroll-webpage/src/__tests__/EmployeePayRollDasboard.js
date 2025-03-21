import {render , screen} from '@testing-library/react';
import EmployeePayrollDashboard from '../components/EmployeePayrollDashboard/EmployeePayrollDashboard';

test('renders hello world' , () =>{
    render(<EmployeePayrollDashboard />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
});

test("Image should render properly", () => {
    render(<NavBar />);
    const imgElement = screen.getByAltText("Company Logo"); 
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "logo.png"); 

    const linkElement = screen.getByText(/EMPLOYEE PAYROLL/i);
    expect(linkElement).toBeInTheDocument();
  });