import { useEffect, useState } from "react";

export const useSearch = (array, value) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    findData();
  }, [value]);

  //TODO : write RegEx for more precision
  const findData = () => {
    try {
      let findings = array.filter((element) => regExString(element.title));
      setData(findings);
      setError(false);
    } catch (e) {
      setError(e);
      setData(array);
    }
  };

  const regExString = (string) => {
    value = value.toLowerCase();
    string = string.toLowerCase();
    return string.includes(value);
  };

  return { data, error };
};
