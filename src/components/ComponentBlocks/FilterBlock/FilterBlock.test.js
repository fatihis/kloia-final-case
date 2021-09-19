import { render } from "@testing-library/react";
import { FilterBlock } from ".";
import "@testing-library/jest-dom";
import data from "../../../utils/db/coffees.json";

test("FilterBlock should render properly", () => {
  const { getByText } = render(<FilterBlock list={data} />);
  expect(getByText("Hot")).toBeInTheDocument();
});

test("If there is a newcomer category then FilterBlock should render it too, properly", () => {
  const { getByText } = render(
    <FilterBlock
      list={[
        ...data,
        {
          title: "Testticino",
          description:
            "Testticino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
          ingredients: ["Espresso", "Steamed Milk", "Foam"],
          category: "not quiet sure",
          id: 3,
        },
      ]}
    />
  );
  expect(getByText("Not quiet sure")).toBeInTheDocument();
});
test("With expected list, FilterBlock should render it too, properly", () => {
  const { getByText } = render(
    <FilterBlock
      list={[
        ...data,
        {
          title: "Testticino",
          description:
            "Testticino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
          ingredients: ["Espresso", "Steamed Milk", "Foam"],
          category: "not quiet sure",
          id: 3,
        },
      ]}
    />
  );
  expect(getByText("Hot")).toBeInTheDocument();
  expect(getByText("Iced")).toBeInTheDocument();
  expect(getByText("All Coffees")).toBeInTheDocument();
});
