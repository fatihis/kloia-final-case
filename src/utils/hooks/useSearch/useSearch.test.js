import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useSearch } from "./useSearch";
import data from "../../../utils/db/coffees.json";
import { flatWhiteData, hotBeverages } from "./useSearchTestContents";

test("passing both search text and filter should return all data", () => {
  const { result } = renderHook(() => useSearch(data, "", ""));

  expect(result.current.data).toStrictEqual(data);
});

test("passing only search text should return related data", () => {
  const { result } = renderHook(() => useSearch(data, "flat w", ""));

  expect(result.current.data).toStrictEqual(flatWhiteData);
});

test("passing only filter should return related data", () => {
  const { result } = renderHook(() => useSearch(data, "", "hot"));
  expect(result.current.data).toStrictEqual(hotBeverages);
});
