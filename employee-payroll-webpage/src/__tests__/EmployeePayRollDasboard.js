import {render , screen} from '@testing-library/react';
import EmployeePayrollDashboard from '../components/EmployeePayrollDashboard/EmployeePayrollDashboard';

test('renders hello world' , () =>{
    render(<EmployeePayrollDashboard />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
});