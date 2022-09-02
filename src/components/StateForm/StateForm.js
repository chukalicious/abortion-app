import axios from "axios";
import { useState, useEffect } from "react";
import {
  baseUrl,
  statesEndpoint,
  minorsEndpoint,
  config,
} from "../../axiosConfig";

const StateForm = (props) => {
  //this is all for the Combobox
  const [states, setStates] = useState([]);
  // console.log("states:", states);
  const [search, setSearch] = useState("");
  // console.log("search: ", search);
  // const [results] = useState([]);

  const [stateObj, setStateObj] = useState({});
  console.log("StateForm: stateObj: ", stateObj);

  useEffect(() => {
    axios
      .get(`${baseUrl}${minorsEndpoint}`, config)
      .then((res) => {
        setStates(Object.keys(res.data));
        props.setObject(stateObj);
      })
      .catch((err) => console.log(err));
  }, [stateObj]);

  const performSearch = () => {
    axios
      .get(`${baseUrl}${statesEndpoint}${search}`, config)
      .then((res) => {
        console.log("StateForm: performSearch: res:", res);
        setStateObj(res.data);
      })
      .catch((err) => console.log(err));
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    performSearch();
    props.getTheStateInfo(stateObj);
  };
  return (
    <>
      <form onSubmit={searchSubmit} className="flex flex-col w-[85%] mx-auto">
        <label
          htmlFor="age"
          placeholder="enter your age"
          className="w-[50%] text-left ml-[25%]"
        >
          Your age:
        </label>
        <input type="number" name="age" id="age" className="w-[50%] mx-auto" />

        <label htmlFor="state" className="w-[50%] text-left ml-[25%]">
          your state:
        </label>
        <select
          name="state"
          id="state"
          required
          onChange={(e) => setSearch(e.target.value)}
        >
          <option>select an option</option>
          {states.sort().map((res, i) => (
            <option value={res} key={i}>
              {res}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={false}
          className="disabled:text-red-600"
        >
          submit
        </button>
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          setSearch("");
        }}
      >
        clear form
      </button>
    </>
  );
};

export default StateForm;
