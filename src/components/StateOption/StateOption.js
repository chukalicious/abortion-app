// Needs local state, since this is a user input container
// needs handlechange to set the state at SubmitEvent
// needs onsubmit

import MapContainer from "../MapComponent";

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
    <div className="flex w-[95%] flex-col bg-base-200 mt-[-.2rem] pb-16 pt-2 min-h-[50vh] mx-auto">
      <h2 className="text-2xl font-semibold pl-4 pb-2">First:</h2>
      <h3 className="px-2 text-xl font-normal pl-2 mb-[1rem] ">
        {" "}
        Select your state from the dropdown below:{" "}
      </h3>
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
            className="select select-primary w-full mb-[-2.rem] "
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
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-8"></div>
        <div className="divider">OR</div>

        <div className=" card bg-base-300 rounded-box place-items-center">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default StateOption;
