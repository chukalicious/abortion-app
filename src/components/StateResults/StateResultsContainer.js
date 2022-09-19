import { useEffect, useState } from "react";
import axios from "axios";
import { config, baseUrl, statesEndpoint } from "../../utils/axiosConfig";
import StateResults from "./StateResults";

const StateResultsContainer = (props) => {
  console.log("StateResultsContainer: props:", props);
  const [stateObject, setStateObject] = useState(null);
  console.log("StateResultsContainer: stateObject: ", stateObject);

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

  return <>{stateObject && <StateResults stateData={stateObject} />}</>;
};

export default StateResultsContainer;
