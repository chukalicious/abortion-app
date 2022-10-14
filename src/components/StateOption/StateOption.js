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
    <div className="flex w-[95%] flex-col bg-base-200 py-16 min-h-[50vh] mx-auto">
      <h2 className="pt-10 text-xl font-normal pl-4">
        Select your state from the dropdown below:{" "}
      </h2>
      {props.stateName && (
        <form
          className="w-full flex flex-col mt-2"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitted!");
            props.setStateToSearch(selectedState);
          }}
        >
          <select
            name="selectedState"
            className="select select-primary w-full "
            onChange={handleChange}
            defaultValue
          >
            <option disabled>{defaultedValue}</option>
            {props.stateName.sort().map((state, i) => (
              <option key={i} value={state}>
                {state}
              </option>
            ))}
          </select>
          <button className="btn btn-primary w-full mx-auto md:btn-md lg:btn-lg mt-14">
            Search
          </button>
        </form>
      )}
    </div>
  );
};

export default StateOption;
