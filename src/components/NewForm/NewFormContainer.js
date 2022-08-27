import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { states } from "../../data/states";

const NewFormContainer = (props) => {
  const [selectedState, setSelectedState] = useState(states);
  const [query, setQuery] = useState("");
  const filteredStates =
    query === ""
      ? states
      : states.filter((state) => {
          return state.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <form className="flex flex-col w-[85%] mx-auto">
      <label htmlFor="age" className="w-[50%] text-left ml-[25%]">
        Your age:
      </label>
      <input type="number" className="w-[50%] mx-auto" />
      <Combobox>
        <label htmlFor="state" className="w-[50%] text-left ml-[25%]">
          Enter your state:
        </label>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          className="w-[50%] mx-auto"
        />
        <Combobox.Options>
          {filteredStates.map((person) => (
            <Combobox.Option key={person} value={person}>
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
      <button type="submit" disabled={false} className="disabled:text-red-600">
        submit
      </button>
    </form>
  );
};

export default NewFormContainer;
