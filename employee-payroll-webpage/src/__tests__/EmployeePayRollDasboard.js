import {render , screen} from '@testing-library/react';
import EmployeePayrollDashboard from '../components/EmployeePayrollDashboard/EmployeePayrollDashboard';

test('renders Employee' , () =>{
    render(<EmployeePayrollDashboard />);
    const linkElement = screen.getByText(/EMPLOYEE/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders PayRoll' , () =>{
    render(<EmployeePayrollDashboard />);
    const linkElement = screen.getByText(/PAYROLL/i);
    expect(linkElement).toBeInTheDocument();
});

test("Image should render properly", () => {
    render(<EmployeePayrollDashboard />);
    const imgElement = screen.getByAltText("logo"); 
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src" , "Logo.jpg"); 
  });