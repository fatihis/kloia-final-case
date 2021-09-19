import { render } from "@testing-library/react";
import { SimpleFilterLabel } from ".";

test("label text should render correctly with props", () => {
  const { getByText } = render(
    <SimpleFilterLabel
      onClick={() => console.log("test")}
      isActive={true}
      text="testtext"
    />
  );

  expect(getByText("testtext")).toBeInTheDocument();
});

test("activated label should be blue", () => {
  const { getByText } = render(
    <SimpleFilterLabel
      onClick={() => console.log("test")}
      isActive={true}
      text="testtext"
    />
  );

  expect(getByText("testtext")).toHaveClass("active");
});
