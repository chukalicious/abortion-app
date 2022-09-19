const Minors = (props) => {
  console.log("Minors: props: ", props);
  return (
    <div>
      {props.minors.below_age ? (
        <p>
          A patient is considered a minor if they are under the age of{" "}
          {props.minors.below_age}.
        </p>
      ) : (
        <p>
          There are no restrictions on minors' abortions currently being
          enforced.
        </p>
      )}

      {props.minors.parental_consent_required ||
      (props.minors.parental_notification_required &&
        props.minors.parents_required > 0) ? (
        <p>
          Parental consent of at least {props.minors.parents_required} parent(s)
          is required for the procedure.
        </p>
      ) : null}

      {props.minors.judicial_bypass_available ? (
        <p>
          A judge can excuse a minor from the required parental consent and/or
          notification. This recourse is available in most states with
          restrictions, and in some you can be excused by a doctor.
        </p>
      ) : (
        <p>There is no judicial bypass available for this state. </p>
      )}
      {props.minors.allows_minor_to_consent ? (
        <p>
          This state, either implicitly, or explicitly, alows a minor to concent
          to the procedure.{" "}
        </p>
      ) : (
        <p>
          This state does not allow minors to consent to the procedure on their
          own.{" "}
        </p>
      )}
    </div>
  );
};

export default Minors;
