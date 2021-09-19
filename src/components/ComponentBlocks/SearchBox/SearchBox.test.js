import { render } from "@testing-library/react";
import { SearchBox } from ".";
import "@testing-library/jest-dom";
import { ListingContextProvider } from "../../../utils/contexts/ListingContext/ListingContext";

test("SearchBox should render properly", () => {
  const { getByPlaceholderText } = render(
    <ListingContextProvider>
      <SearchBox />
    </ListingContextProvider>
  );
  expect(getByPlaceholderText("Search")).toBeInTheDocument();
});
