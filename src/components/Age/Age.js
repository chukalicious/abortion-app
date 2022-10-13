import { useState } from "react";

// must hold local state to use user input

const Age = (props) => {
  console.log("Age: props: ", props);

  const [age, setAge] = useState("");
  console.log("Age: age: ", age);

  const [isMinor, setIsMinor] = useState(false);
  console.log("Age: isMinor: ", isMinor);

  const handleChange = (e) => {
    setAge(Number(e.target.value));
  };

  const handleBlur = (e) => {
    if (age !== "") {
      props.getAge(Number(age));
    }
  };

  const checkIfMinor = (input) => {
    if (input !== "" && props.minorsData.below_age > Number(input)) {
      setIsMinor(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkIfMinor(age);
  };

  return (
    <div className="w-[95%] mx-auto flex flex-col">
      <h2 className="text-xl">
        If you want to check whether minor restrictions apply, please enter an
        age below:
      </h2>

      <form className="mx-auto flex flex-col w-full" onSubmit={handleSubmit}>
        {/* must have validation to accept only numbers, can use regex */}

        <input
          onBlur={handleBlur}
          type="text"
          placeholder="Type here"
          name="age"
          value={age}
          onChange={handleChange}
          className="input input-bordered input-lg w-full max-w-xs input-secondary"
        />
      </form>
      <div>
        <p>Age entered: {age}</p>
        {age !== "" && isMinor ? <p>this is true</p> : null}
      </div>
    </div>
  );
};

export default Age;
