import { render, screen } from '@testing-library/react';
import Registration from '../Pages/Registration/Registration';

describe('EmployeePayrollRegistration Testing', () => {
    test('renders employee payroll form', () => {
        render(<Registration />);
        const linkElement = screen.getByText(/Employee Payroll Registration/i);
        expect(linkElement).toBeInTheDocument();
    });
});