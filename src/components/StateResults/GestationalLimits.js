const GestationalLimits = (props) => {
  console.log("GestationalLimits: props: ", props);
  return (
    <div>
      <p>
        Allows {props.gestationalLimits.exception_health} health exception.{" "}
      </p>
      {props.gestationalLimits.banned_after_weeks_since_LMP === 99 ? (
        <p>Abortions are banned after viability in this state</p>
      ) : props.gestationalLimits.banned_after_weeks_since_LMP === 28 ? (
        <p>Abortions are banned after the third trimester </p>
      ) : props.gestationalLimits.banned_after_weeks_since_LMP === 22 ? (
        <p>Abortions are banned post-fertilization</p>
      ) : props.gestationalLimits.banned_after_weeks_since_LMP === 0 ? (
        <p>Unknown Value</p>
      ) : (
        <p>Abortions are banned post-implantation</p>
      )}
      <p>
        {props.gestationalLimits.exception_life === true
          ? "There is no abortion ban for life threatening conditions"
          : "Does not allow exceptions in case there are life threatining conditions ot the mother"}{" "}
      </p>
    </div>
  );
};

export default GestationalLimits;
