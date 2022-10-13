import { useEffect, useState } from "react";
import axios from "axios";
import { config, baseUrl, statesEndpoint } from "../../utils/axiosConfig";
import StateResults from "./StateResults";

const StateResultsContainer = (props) => {
  console.log("StateResultsContainer: props:", props);
  const [stateObject, setStateObject] = useState(null);
  console.log("StateResultsContainer: stateObject: ", stateObject);
  const [userAge, setUserAge] = useState("");
  console.log("StateResultsContainer: userAge: ", userAge);

  useEffect(() => {
    axios
      .get(`${baseUrl}${statesEndpoint}${props.stateToSearch}`, config)
      .then((res) => {
        console.log(
          "StateResultsContainer: useEffect: call to States endpoint: ",
          res.data
        );
        let grupo = Object.entries(res.data);
        for (let [state, rules] of grupo) {
          let newObject = { state: rules };
          setStateObject(newObject);
        }
      })
      .catch((err) => console.log(err));
  }, [props.stateToSearch]);

  const getUserAge = (age) => {
    setUserAge(Number(age));
  };

  return (
    <div className="bg-base-200">
      {stateObject && (
        <StateResults
          stateData={stateObject}
          stateName={props.stateToSearch}
          getUserAge={getUserAge}
          userAge={userAge}
        />
      )}
    </div>
  );
};

export default StateResultsContainer;
