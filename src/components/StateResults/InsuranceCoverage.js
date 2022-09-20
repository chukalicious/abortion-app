const InsuranceCoverage = (props) => {
  console.log("InsuranceCoverage: props:", props);
  return (
    <div>
      {props.insuranceCoverage.requires_coverage && (
        <p>
          The state requires that any private health plan regulated by the state
          covers abortion procedures.
        </p>
      )}

      {props.insuranceCoverage.private_coverage_no_restrictions && (
        <p>
          Private insurance is not required to cover abortion procedures but may
          do so, at their discretion.
        </p>
      )}

      {props.insuranceCoverage.private_exception_life && (
        <p>
          Despite other restrictions, the state allows private insurance
          coverage for cases where abortion is necessary to save the pregnant
          person's life.{" "}
        </p>
      )}

      {props.insuranceCoverage.private_exception_health !== null && (
        <p>
          Despite other restrictions, the state allows private insurance
          coverage for cases when the pregnant person's faces a "substantial and
          irreversible impairment of a major bodily function." In other words, a
          very serious health condition.{" "}
        </p>
      )}

      {props.insuranceCoverage.private_exception_fetal !== null && (
        <p>
          Despite other restrictions, the state allows private insurance
          coverage for cases when the fetus has a lethal fetal anomaly.
        </p>
      )}

      {props.insuranceCoverage.private_exception_rape_or_incest && (
        <p>
          Despite other restrictions, the state allows private insurance
          coverage for cases of rape or incest.{" "}
        </p>
      )}

      {props.insuranceCoverage.exchange_coverage_no_restrictions && (
        <p>
          The state has not restricted abortion coverage in ACA plans. Except in
          a few states that have required abortion coverage, a lack of
          restrictions does not mean that every plan offered in the Exchange
          will include abortion coverage.{" "}
        </p>
      )}

      {props.insuranceCoverage.exchange_exception_life && (
        <p>
          Despite other restrictions, the state allows exchange insurance
          coverage for cases where abortion is necessary to save the pregnant
          person's life.{" "}
        </p>
      )}

      {props.insuranceCoverage.exchange_exception_health &&
      props.insuranceCoverage.exchange_exception_health !== null ? (
        <p>
          The state allows exchange insurance coverage for cases when the
          pregnant person's faces a "substantial and irreversible impairment of
          a {props.insuranceCoverage.exchange_exception_health.toLowerCase()}{" "}
        </p>
      ) : null}

      {props.insuranceCoverage.exchange_exception_fetal !== null && (
        <p>
          despite other restrictions, the state allows exchange insurance
          coverage for cases when the fetus has a lethal fetal anomaly.{" "}
        </p>
      )}

      {props.insuranceCoverage.exchange_exception_rape_or_incest && (
        <p>
          despite other restrictions, the state allows exchange insurance
          coverage for cases of rape or incest.{" "}
        </p>
      )}

      {props.insuranceCoverage.exchange_forbids_coverage && (
        <p>
          the state prohibits any and all exchange insurance coverage for
          abortion{" "}
        </p>
      )}

      {props.insuranceCoverage.medicaid_coverage_provider_patient_decision && (
        <p>
          the state has a policy in place to use Medicaid funds to pay for
          abortion, most of these states require coverage for "medically
          necessary" abortion. This is a vaguely-defined criterion usually based
          on a decision between a pregnant person and their medical provider and
          can include circumstances beyond physical health, such as mental or
          emotional health or familial situations.{" "}
        </p>
      )}

      {props.insuranceCoverage.medicaid_exception_life === true ? (
        <p>
          The state allows Medicaid insurance coverage for cases of rape or
          incest, as required by the Hyde amendment.
        </p>
      ) : null}

      {props.insuranceCoverage.medicaid_exception_health !== "" && (
        <p>
          The state allows Medicaid insurance coverage for cases when the
          pregnant person's physical health is endangered.{" "}
        </p>
      )}

      {props.insuranceCoverage.medicaid_exception_fetal !== null && (
        <p>
          the state allows Medicaid insurance coverage for cases when the fetus
          has a serious or lethal fetal anomaly{" "}
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
