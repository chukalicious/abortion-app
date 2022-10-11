import { useState } from "react";

// must hold local state to use user input

const Age = (props) => {
  console.log("Age: props: ", props);

  const [age, setAge] = useState("");
  console.log("Age: age: ", age);

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const handleBlur = (e) => {
    if (age !== "") {
      props.getAge(age);
    }
  };
  return (
    <div className="w-[95%] mx-auto flex flex-col">
      <h2 className="text-xl">
        If you want to check whether minor restrictions apply, please enter an
        age below:
      </h2>

      <form className="mx-auto flex flex-col w-full">
        {/* must have validation to accept only numbers, use regex */}

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
    </div>
  );
};

export default Age;
