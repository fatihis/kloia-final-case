import { render } from "@testing-library/react";
import { MenuItem } from ".";
import "@testing-library/jest-dom";

test("MenuItem should render properly", () => {
  const element = {
    title: "Iced Coffee",
    description:
      "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
    ingredients: ["Coffee", "Ice", "Sugar*", "Cream*"],
    category: "iced",
    id: 21,
  };
  const { getByText } = render(<MenuItem item={element} />);
  expect(getByText("Iced Coffee")).toBeInTheDocument();
});
