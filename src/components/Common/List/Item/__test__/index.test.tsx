import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "../../Item";

const props = {
  id: 1,
  name: "Toyota",
  logo: "https://fastly.picsum.photos/id/1036/200/300.jpg?hmac=VF4u-vITiP0ezQiSbE3UBvxHDFf8ZqJDycaAIoffsCg",
};

test("should show list item in sidebar", () => {
  render(<Item {...props} />);

  const itemElement = screen.getByRole('heading', {
    name: /Toyota/i
  })

  expect(itemElement).toBeInTheDocument()
});


test('show show item image correctly', () => {
    render(<Item {...props} />)

    const itemImage:HTMLImageElement = screen.getByAltText(/Toyota/i);
    expect(itemImage.src).toBe(props.logo)
})