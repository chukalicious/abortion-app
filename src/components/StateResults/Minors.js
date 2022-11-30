const Minors = (props) => {
  console.log("Minors: props: ", props);
  return (
    <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
      {props.minors.below_age ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                A patient is considered a minor if they are under the age of{" "}
                {props.minors.below_age}.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                There are no restrictions on minors' abortions currently being
                enforced.
              </p>
            </div>
          </div>
        </div>
      )}

      {props.minors.parental_consent_required ||
      (props.minors.parental_notification_required &&
        props.minors.parents_required > 0) ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                {" "}
                Parental consent of at least {
                  props.minors.parents_required
                }{" "}
                parent(s) is required for the procedure.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {props.minors.judicial_bypass_available ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                A judge can excuse a minor from the required parental consent
                and/or notification. This recourse is available in most states
                with restrictions, and in some you can be excused by a doctor.
              </p>
            </div>
          </div>{" "}
        </div>
      ) : (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>There is no judicial bypass available for this state. </p>
            </div>
          </div>
        </div>
      )}
      {props.minors.allows_minor_to_consent ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                This state, either implicitly, or explicitly, alows a minor to
                concent to the procedure.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                This state does not allow minors to consent to the procedure on
                their own.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Minors;
