import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Landing from '../../Landing'

beforeEach(() => {
    render(<Landing />)
})

test('check if details shows', () => {
    const detailsElement = screen.getAllByRole('heading')

    detailsElement.forEach((element) => {
        expect(element).toBeInTheDocument()
    })
})

test('check if the more details button shows', () => {
    const moreBtnElement = screen.getByRole('button');

    expect(moreBtnElement).toBeInTheDocument()
})