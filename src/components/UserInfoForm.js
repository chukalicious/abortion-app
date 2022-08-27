import { useState } from "react";
import { states } from "../data/states";
import { Combobox } from "@headlessui/react";

const UserInfoForm = () => {
  const [selectedState, setSelectedState] = useState(states);
  const [query, setQuery] = useState("");
  const [formValues, setFormValues] = useState({
    age: "",
    state: selectedState,
  });

  const filteredStates =
    query === ""
      ? states
      : states.filter((state) => {
          return state.toLowerCase().includes(query.toLowerCase());
        });

  const handleChange = (e) => {
    setFormValues({ ...formValues, age: e.target.value, state: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedState("");
    setFormValues({
      age: "",
      state: selectedState,
    });
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col w-full">
      <form onSubmit={handleSubmit} className="flex flex-col w-[85%] mx-auto">
        <Combobox value={selectedState} onChange={setSelectedState}>
          <label htmlFor="state" className="w-[50%] text-left ml-[25%]">
            Select your state:
          </label>
          <Combobox.Input onChange={handleQuery} className="w-[50%] mx-auto" />
          <Combobox.Options>
            {filteredStates.map((state, i) => (
              <Combobox.Option key={i} value={state}>
                {filteredStates}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>

        <label htmlFor="age" className="w-[50%] text-left ml-[25%]">
          Your Age:{" "}
        </label>
        <input
          type="text"
          name="age"
          id="age"
          value={formValues.age}
          onChange={handleChange}
          className="w-[50%] mx-auto"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserInfoForm;
