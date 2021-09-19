import { render } from "@testing-library/react";
import { Menu } from ".";
import "@testing-library/jest-dom";
import { ListingContextProvider } from "../../../utils/contexts/ListingContext/ListingContext";
import coffees from "../../../utils/db/coffees.json";

test("Menu component should render properly", () => {
  const { getByText } = render(
    <ListingContextProvider>
      <Menu list={coffees} />
    </ListingContextProvider>
  );
  expect(getByText("Iced Coffee")).toBeInTheDocument();
  expect(getByText("Black")).toBeInTheDocument();
  expect(getByText("Latte")).toBeInTheDocument();
  expect(getByText("Cappuccino")).toBeInTheDocument();
  expect(
    getByText(
      "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice."
    )
  ).toBeInTheDocument();
});
