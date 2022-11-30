const GestationalLimits = (props) => {
  console.log("GestationalLimits: props: ", props);
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      {props.gestationalLimits.exception_health ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Allows {props.gestationalLimits.exception_health.toLowerCase()}{" "}
                health exception(s).{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                This state does not make exceptions for life threatening health
                conditions to the pregnant person.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.gestationalLimits.banned_after_weeks_since_LMP === 99 ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                In this state abortions are banned after the fetus has reached
                viability.
              </p>
            </div>
          </div>
        </div>
      ) : props.gestationalLimits.banned_after_weeks_since_LMP === 28 ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>Abortions are banned after the third trimester.</p>
            </div>
          </div>
        </div>
      ) : props.gestationalLimits.banned_after_weeks_since_LMP === 22 ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>Abortions are banned "post-fertilization".</p>
            </div>
          </div>
        </div>
      ) : props.gestationalLimits.banned_after_weeks_since_LMP === 0 ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>Cannot interpret rules</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>Abortions are banned "post-implantation".</p>
            </div>
          </div>
        </div>
      )}
      {props.gestationalLimits.exception_life === true ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Abortion exceptions are granted if necessary to save the
                pregnant person's life.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Abortion is banned even in case the pregnant person's life is in
                danger.{" "}
              </p>
            </div>
          </div>
        </div>
      )}{" "}
      {props.gestationalLimits.exception_fetal &&
      props.gestationalLimits.exception_fetal !== "" ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>
                Exceptions may be granted if the fetus suffers a{" "}
                {props.gestationalLimits.exception_fetal.toLowerCase()}.{" "}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      {props.gestationalLimits.exception_rape_or_incest ? (
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>Exceptions may be granted in cases of rape or incest</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GestationalLimits;
