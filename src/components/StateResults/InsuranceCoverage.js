const InsuranceCoverage = (props) => {
  console.log("InsuranceCoverage: props:", props);
  return (
    <div>
      {props.insuranceCoverage.medicaid_exception_life === true ? (
        <p>
          The state allows Medicaid insurance coverage for cases of rape or
          incest (this is required by the Hyde amendment).
        </p>
      ) : (
        <p>
          The state does not allow Medicaid insurance coverage for cases of rape
          or incest (this is required by the Hyde amendment).
        </p>
      )}

      {props.insuranceCoverage.medicaid_exception_rape_or_incest === true ? (
        <p>
          The state allows Medicaid insurance coverage for cases where abortion
          is necessary to save the pregnant person's life (this is required by
          the Hyde amendment).
        </p>
      ) : (
        <p>
          The state does not allow Medicaid insurance coverage for cases where
          abortion is necessary to save the pregnant person's life{" "}
        </p>
      )}
    </div>
  );
};

export default InsuranceCoverage;
