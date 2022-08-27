import { useState } from "react";
import { states } from "../data/states";
import { Combobox } from "@headlessui/react";

const UserInfoForm = () => {
  const [errors, setErrors] = useState({
    ageErrorMs: "",
    stateErrorMs: "",
  });
  console.log("errors", errors);

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
    setFormValues({ ...formValues, age: e.target.value, state: query });
  };

  const katSubmit = (e) => {
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

  const validateState = () => {
    if (query === "") {
      setErrors({
        ...errors,
        stateErrorMs: "*Please enter a valid state name*",
      });
    } else {
      setErrors({ ...errors, stateErrorMs: "" });
    }
  };

  const validateAge = () => {
    if (formValues.age === "") {
      setErrors({
        ...errors,
        ageErrorMs:
          "*Enter an age value to obtain information on retrictions by patient age*",
      });
    } else if (formValues.age < 0 || formValues.age > 99) {
      setErrors({
        ...errors,
        ageErrorMs: "*Enter an age between 0 and 99*",
      });
    } else {
      setErrors({
        ...errors,
        stateErrorMs: "",
        ageErrorMs: "",
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <form onSubmit={katSubmit} className="flex flex-col w-[85%] mx-auto">
        <Combobox value={selectedState} onChange={setSelectedState}>
          <label htmlFor="state" className="w-[50%] text-left ml-[25%]">
            Select your state:
          </label>
          <Combobox.Input
            onChange={handleQuery}
            className="w-[50%] mx-auto"
            onBlur={validateState}
          />
          <Combobox.Options>
            {filteredStates.map((state, i) => (
              <Combobox.Option key={i} value={state}>
                {filteredStates}
              </Combobox.Option>
            ))}
          </Combobox.Options>
          {errors.stateErrorMs !== "" ? (
            <p className="text-red-500">{errors.stateErrorMs}</p>
          ) : null}
        </Combobox>

        <label htmlFor="age" className="w-[50%] text-left ml-[25%]">
          Your Age:{" "}
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formValues.age}
          onChange={handleChange}
          className="w-[50%] mx-auto"
          onBlur={validateAge}
        />
        {errors.ageErrorMs !== "" ? (
          <p className="text-red-500">{errors.ageErrorMs}</p>
        ) : null}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserInfoForm;
