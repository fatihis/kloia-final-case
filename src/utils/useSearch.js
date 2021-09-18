import { useEffect, useState } from "react";

export const useSearch = (array, value) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    findData();
  }, []);

  //TODO : write RegEx for more precision
  const findData = () => {
    try {
      let findings = array.filter((element) => regExString(element, value));
      setData(findings);
      setError(false);
    } catch (e) {
      setError(e);
      setData(array);
    }
  };

  function regExString(string, value) {
    const regExs = [
      string,
      string[0].toUpperCase() + string.slice(1),
      string[0].toLowerCase() + string.slice(1),
    ];
    regExs.forEach((element) => {
      if (element === value) return true;
    });
    return false;
  }
  function deCapitalizeFirstLetter(string) {}

  return { data, error };
};
