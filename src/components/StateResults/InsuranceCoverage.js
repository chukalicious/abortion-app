const InsuranceCoverage = (props) => {
  console.log("InsuranceCoverage: props:", props);
  return (
    <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
      {props.insuranceCoverage.requires_coverage && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state requires that any private health plan regulated by the
                state covers abortion procedures.
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.private_coverage_no_restrictions && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Private insurance is not required to cover abortion procedures
                but may do so, at their discretion.
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.private_exception_life && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Despite other restrictions, the state allows private insurance
                coverage for cases where abortion is necessary to save the
                pregnant person's life.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.private_exception_health !== null && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Despite other restrictions, the state allows private insurance
                coverage for cases when the pregnant person's faces a
                "substantial and irreversible impairment of a major bodily
                function." In other words, a very serious health condition.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.private_exception_fetal !== null && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Despite other restrictions, the state allows private insurance
                coverage for cases when the fetus has a lethal fetal anomaly.
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.private_exception_rape_or_incest && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Despite other restrictions, the state allows private insurance
                coverage for cases of rape or incest.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.exchange_coverage_no_restrictions && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state has not restricted abortion coverage in ACA plans.
                Except in a few states that have required abortion coverage, a
                lack of restrictions does not mean that every plan offered in
                the Exchange will include abortion coverage.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.exchange_exception_life && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Despite other restrictions, the state allows exchange insurance
                coverage for cases where abortion is necessary to save the
                pregnant person's life.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.exchange_exception_health &&
      props.insuranceCoverage.exchange_exception_health !== null ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state allows exchange insurance coverage for cases when the
                pregnant person's faces a "substantial and irreversible
                impairment of a{" "}
                {props.insuranceCoverage.exchange_exception_health.toLowerCase()}{" "}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      {props.insuranceCoverage.exchange_exception_fetal !== null && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Despite other restrictions, the state allows exchange insurance
                coverage for cases when the fetus has a lethal fetal anomaly.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.exchange_exception_rape_or_incest && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Despite other restrictions, the state allows exchange insurance
                coverage for cases of rape or incest.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.exchange_forbids_coverage && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state prohibits any and all exchange insurance coverage for
                abortion{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.medicaid_coverage_provider_patient_decision && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state has a policy in place to use Medicaid funds to pay for
                abortion, most of these states require coverage for "medically
                necessary" abortion. This is a vaguely-defined criterion usually
                based on a decision between a pregnant person and their medical
                provider and can include circumstances beyond physical health,
                such as mental or emotional health or familial situations.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.medicaid_exception_life === true ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state allows Medicaid insurance coverage for cases of rape
                or incest, as required by the Hyde amendment.
              </p>
            </div>
          </div>
        </div>
      ) : null}
      {props.insuranceCoverage.medicaid_exception_health !== "" && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state allows Medicaid insurance coverage for cases when the
                pregnant person's physical health is endangered.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.medicaid_exception_fetal !== null && (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state allows Medicaid insurance coverage for cases when the
                fetus has a serious or lethal fetal anomaly{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.insuranceCoverage.medicaid_exception_rape_or_incest === true ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state allows Medicaid insurance coverage for cases where
                abortion is necessary to save the pregnant person's life (this
                is required by the Hyde amendment).
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                The state does not allow Medicaid insurance coverage for cases
                where abortion is necessary to save the pregnant person's life{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceCoverage;
