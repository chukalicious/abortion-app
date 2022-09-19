import { useState, useEffect } from "react";
import GestationalLimits from "./GestationalLimits";
import Minors from "./Minors";

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
    <div className="bg-base-200 min-h-[50vh] max-w-[95%] mx-auto">
      <h2 className="pt-10 text-xl font-normal pl-4">State Rules: </h2>{" "}
      {rules.gestationalLimits && (
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium ">
            Gestational Limits
          </div>
          <div className="collapse-content">
            <GestationalLimits gestationalLimits={rules.gestationalLimits} />
          </div>
        </div>
      )}
      {rules.minors && (
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">Minors</div>
          <div className="collapse-content">
            <Minors minors={rules.minors} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StateResults;
