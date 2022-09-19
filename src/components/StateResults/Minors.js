const Minors = (props) => {
  console.log("Minors: props: ", props);
  return (
    <div>
      <p>
        A patient is considered a minor if they are under the age of{" "}
        {props.minors.below_age}
      </p>
      <p>
        {props.minors.parental_consent_required &&
        props.minors.parents_required > 0
          ? `Parental consent of at least ${props.minors.parents_required} parent(s) is required for the procedure.`
          : `Requires the consent of ${props.minors.parents_required} parents for the procedure`}
      </p>
    </div>
  );
};

export default Minors;
