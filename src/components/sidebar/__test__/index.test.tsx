import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect'
import App from '../../../App';

test('shoul show sidebarmenu on sidebar value true', () => {
    render(<App />)

    const BrandsBtn = screen.getByTestId('siedbar-btn');
    const Sidebar = screen.queryByTestId('sidebar')
    expect(Sidebar).toHaveClass('translate-x-full')

    userEvent.click(BrandsBtn);

    expect(Sidebar).toHaveClass('translate-x-0')
})