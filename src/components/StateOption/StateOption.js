// Needs local state, since this is a user input container
// needs handlechange to set the state at SubmitEvent
// needs onsubmit

import { useState } from "react";

const StateOption = (props) => {
  console.log("StateOption: props: ", props);
  const [selectedState, setSelectedStates] = useState({});
  console.log("selectedState: ", selectedState);

  const handleChange = (e) => {
    setSelectedStates(e.target.value);
  };

  const defaultedValue = "Select your State";

  return (
    <>
      {props.stateName && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitted!");
            props.setStateToSearch(selectedState);
          }}
        >
          <select
            name="selectedState"
            className="select select-primary w-full max-w-xs"
            onChange={handleChange}
          >
            <option disabled selected>
              {defaultedValue}
            </option>
            {props.stateName.sort().map((state, i) => (
              <option key={i} value={state}>
                {state}
              </option>
            ))}
          </select>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Search
          </button>
        </form>
      )}
    </>
  );
};

export default StateOption;
