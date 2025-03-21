describe('EmployeePayrollRegistration Testing', () => {
    test('renders employee payroll form', () => {
        render(<EmployeePayrollRegistration />);
        const linkElement = screen.getByText(/Employee Payroll Registration/i);
        expect(linkElement).toBeInTheDocument();
    });
});