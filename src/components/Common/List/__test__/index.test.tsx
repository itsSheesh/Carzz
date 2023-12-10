import {render, screen} from '@testing-library/react'
import List from '..';
import { brands } from '../../../../data/brands';

test('should show list of brands', () => {
    render(<List brands={brands} />)

    const ListElement = screen.getAllByTestId('brand-item');
    expect(ListElement.length).toBe(brands.length);
})