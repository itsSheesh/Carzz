import {render, screen} from '@testing-library/react'
import Item from '../index'
import "@testing-library/jest-dom";

const model = {
    id: 1,
    name: 'Model X',
    onClickHandler: () => {}
}

test('should show name of model', () => {
    render(<Item name={model.name} id={model.id} onClickHandler={model.onClickHandler} />)
    const itemElementInSubItems = screen.getByTestId('Model-item')

    expect(itemElementInSubItems.textContent).toBe(model.name);
});