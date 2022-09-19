import { useState, useEffect } from "react";
import GestationalLimits from "./GestationalLimits";

const StateResults = (props) => {
  console.log("StateResults: props: ", props);

  const [rules, setRules] = useState({});
  console.log("StateResults: rules: ", rules);

  useEffect(() => {
    setRules({
      gestationalLimits: props.stateData.state.gestational_limits,
      insuranceCoverage: props.stateData.state.insurance_coverage,
      minors: props.stateData.state.minors,
      waitingPeriods: props.stateData.state.waiting_periods,
    });
  }, [props]);

  return (
    <>
      {" "}
      {rules.gestationalLimits && (
        <GestationalLimits gestationalLimits={rules.gestationalLimits} />
      )}
    </>
  );
};

export default StateResults;
