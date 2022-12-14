import { useEffect, useState } from "react";
import axios from "axios";
import {
  baseUrl,
  minorsEndpoint,
  config,
} from "../../utils/abortionApiAxiosConfig";
import StateOption from "./StateOption";
import StateResultsContainer from "../StateResults";

const StateOptionContainer = () => {
  // Get list of States to use in the options
  const [stateName, setStateName] = useState("");
  const [stateToSearch, setStateToSearch] = useState("");
  console.log("StateOptionContainer: stateToSearch: ", stateToSearch);
  useEffect(() => {
    axios
      .get(`${baseUrl}${minorsEndpoint}`, config)
      .then((res) => {
        // console.log("res at then(): ", res.data);
        setStateName(Object.keys(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-base-200">
      <StateOption stateName={stateName} setStateToSearch={setStateToSearch} />
      {stateToSearch.length > 0 && (
        <StateResultsContainer stateToSearch={stateToSearch} />
      )}{" "}
    </div>
  );
};

export default StateOptionContainer;
