import { useState, useEffect } from "react";
import AgeContainer from "../Age";
import GestationalLimits from "./GestationalLimits";
import InsuranceCoverage from "./InsuranceCoverage";
import Minors from "./Minors";
import WaitingPeriods from "./WaitingPeriods";

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
      <AgeContainer minorsData={rules.minors} getUserAge={props.getUserAge} />
      <h2 className="pt-10 text-xl font-normal pl-4">
        State Rules for the state of {props.stateName}{" "}
      </h2>{" "}
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
      {rules.insuranceCoverage && (
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Insurance Coverage
          </div>
          <div className="collapse-content">
            <InsuranceCoverage insuranceCoverage={rules.insuranceCoverage} />
          </div>
        </div>
      )}
      {rules.waitingPeriods && (
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Waiting Periods
          </div>
          <div className="collapse-content">
            <WaitingPeriods waitingPeriods={rules.waitingPeriods} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StateResults;
