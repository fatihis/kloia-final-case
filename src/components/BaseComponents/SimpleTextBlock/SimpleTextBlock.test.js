import { render } from "@testing-library/react";
import { SimpleTextBlock } from ".";
import "@testing-library/jest-dom";

test("SimpleTextBlock should render properly with header prop", () => {
  const { getByText } = render(
    <SimpleTextBlock text="testtext" type="header" />
  );
  expect(getByText("testtext")).toBeInTheDocument();
});

test("SimpleTextBlock should render properly with description prop", () => {
  const { getByText } = render(
    <SimpleTextBlock text="testtext" type="description" />
  );
  expect(getByText("testtext")).toBeInTheDocument();
});
test("SimpleTextBlock should render properly with annotation prop", () => {
  const { getByText } = render(
    <SimpleTextBlock text="testtext" type="annotation" />
  );
  expect(getByText("testtext")).toBeInTheDocument();
});
test("SimpleTextBlock should have correct classes with header prop", () => {
  const { getByText } = render(
    <SimpleTextBlock text="testtext" type="header" />
  );
  expect(getByText("testtext")).toHaveClass("exo-bold");
  expect(getByText("testtext")).toHaveClass("font-extrabold");
  expect(getByText("testtext")).toHaveClass("text-2xl");
  expect(getByText("testtext")).toHaveClass("mb-1");
});
test("SimpleTextBlock should have correct classes with  description prop", () => {
  const { getByText } = render(
    <SimpleTextBlock text="testtext" type="description" />
  );
  expect(getByText("testtext")).toHaveClass("roboto-regular");
  expect(getByText("testtext")).toHaveClass("text-xl");
  expect(getByText("testtext")).toHaveClass("mb-1");
});
test("SimpleTextBlock should have correct classes with  annotation prop", () => {
  const { getByText } = render(
    <SimpleTextBlock text="testtext" type="annotation" />
  );
  expect(getByText("testtext")).toHaveClass("roboto-regular");
});
