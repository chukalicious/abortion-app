import { useState } from "react";
import Age from "./Age";

const AgeContainer = (props) => {
  console.log("AgeContainer.js: props: ", props);

  const [userAge, setUserAge] = useState("");
  console.log("AgeContainer: userAge: ", userAge);

  const getAge = (age) => {
    setUserAge(Number(age));
  };

  return <Age minorsData={props.minorsData} getAge={getAge} />;
};

export default AgeContainer;
