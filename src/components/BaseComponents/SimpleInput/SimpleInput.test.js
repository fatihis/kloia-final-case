import { render, fireEvent } from "@testing-library/react";
import { SimpleInput } from ".";
import "@testing-library/jest-dom";

test("SimpleInput should render correctly", () => {
  const { getByPlaceholderText } = render(
    <SimpleInput placeholder="testplaceholder" onChange={() => console.log()} />
  );
  expect(getByPlaceholderText("testplaceholder")).toBeInTheDocument();
});

test("SimpleInput property onChange should be working correctly", () => {
  const { getByPlaceholderText } = render(
    <SimpleInput
      placeholder="testplaceholder"
      onChange={(input) => inputControl(input)}
    />
  );
  const inputText = "coffeelatte";
  const inputControl = (input) => {
    if (input !== inputText) {
      throw new Error("input and output are not matching");
    }
  };

  fireEvent.change(getByPlaceholderText("testplaceholder"), {
    target: { value: inputText },
  });
});
