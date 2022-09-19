const GestationalLimits = (props) => {
  console.log("GestationalLimits: props: ", props);
  return (
    <div>
      <p>
        Allows {props.gestationalLimits.exception_health} health exception.{" "}
      </p>
      <p>
        Banned after {props.gestationalLimits.banned_after_weeks_since_LMP}{" "}
        weeks since last menstrual period.{" "}
      </p>
      <p>
        {props.gestationalLimits.exception_life === true
          ? "Allows exceptions for life threatening conditions"
          : "Does not allow exceptions for life threatening conditions"}{" "}
      </p>
    </div>
  );
};

export default GestationalLimits;
