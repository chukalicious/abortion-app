import { useState } from "react";

// must hold local state to use user input

const Age = () => {
  const [age, setAge] = useState("");

  console.log("age: ", age);

  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <div className="w-[95%] mx-auto flex flex-col">
      <h2 className="text-xl">
        If you want to check whether minor restrictions apply, please enter an
        age below:
      </h2>

      <form className="mx-auto flex flex-col w-full">
        {/* must have validation to accept only numbers */}

        <input
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
