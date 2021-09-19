import { useEffect, useState } from "react";
//Returns array filtered with parameters or an error
export const useSearch = (array, value, filter) => {
  const [data, setData] = useState([]); // for storing and managing results
  const [error, setError] = useState(); // for error handling
  useEffect(() => {
    //calling each time either value or filter changed
    findData();
  }, [value, filter]);

  //TODO : write RegEx for more precision
  const findData = () => {
    try {
      let findings = array.filter((element) => regExElement(element));
      setData(findings);
      setError(false);
    } catch (e) {
      setError(e);
      setData(array);
      console.log(e + "e");
    }
  };
  //Checks if either category or filter matches the values or whether filter is empty or "All Coffees"
  const regExElement = (element) => {
    value = value.toLowerCase();
    let title = element.title.toLowerCase();
    return (
      title.includes(value) &&
      (element.category === filter || filter === "" || filter === "All Coffees")
    );
  };

  return { data, error };
};
