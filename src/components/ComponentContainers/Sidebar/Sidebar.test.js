import { render } from "@testing-library/react";
import { Sidebar } from ".";
import "@testing-library/jest-dom";
import { ListingContextProvider } from "../../../utils/contexts/ListingContext/ListingContext";
import coffees from "../../../utils/db/coffees.json";

test("Sidebar component should render properly", () => {
  const { getByText } = render(
    <ListingContextProvider>
      <Sidebar list={coffees} />
    </ListingContextProvider>
  );
  expect(getByText("Iced")).toBeInTheDocument();
});
