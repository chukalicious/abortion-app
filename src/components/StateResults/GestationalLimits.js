const GestationalLimits = (props) => {
  console.log("GestationalLimits: props: ", props);
  return (
    <div>
      {props.gestationalLimits.exception_health ? (
        <p>
          Allows {props.gestationalLimits.exception_health.toLowerCase()} health
          exception(s).{" "}
        </p>
      ) : (
        <p>
          This state does not make exceptions for life threatening health
          conditions to the pregnant person.{" "}
        </p>
      )}
      {props.gestationalLimits.banned_after_weeks_since_LMP === 99 ? (
        <p>
          In this state abortions are banned after the fetus has reached
          viability.
        </p>
      ) : props.gestationalLimits.banned_after_weeks_since_LMP === 28 ? (
        <p>Abortions are banned after the third trimester. </p>
      ) : props.gestationalLimits.banned_after_weeks_since_LMP === 22 ? (
        <p>Abortions are banned "post-fertilization".</p>
      ) : props.gestationalLimits.banned_after_weeks_since_LMP === 0 ? (
        <p>Cannot interpret rules</p>
      ) : (
        <p>Abortions are banned "post-implantation".</p>
      )}
      {props.gestationalLimits.exception_life === true ? (
        <p>
          Abortion exceptions are granted if necessary to save the pregnant
          person's life.{" "}
        </p>
      ) : (
        <p>
          Abortion is banned even in case the pregnant person's life is in
          danger.{" "}
        </p>
      )}{" "}
      {props.gestationalLimits.exception_fetal &&
      props.gestationalLimits.exception_fetal !== "" ? (
        <p>
          Exceptions may be granted if the fetus suffers a{" "}
          {props.gestationalLimits.exception_fetal.toLowerCase()}.{" "}
        </p>
      ) : null}
      {props.gestationalLimits.exception_rape_or_incest ? (
        <p>Exceptions may be granted in cases of rape or incest</p>
      ) : null}
    </div>
  );
};

export default GestationalLimits;
